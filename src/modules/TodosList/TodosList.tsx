import { useState, useEffect, useRef, useCallback } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../../store";
import * as S from "./styles";
import * as C from "./constants";
import { todo, todos_response } from "../../api/gorest_response_models";
import { addTodos, updatePage } from "../../store/todos/actions";
import SearchBar from "../../components/SearchBar";
import TodoResult from "../../components/TodoResult";

const TodosList: React.FC<C.TodosProps> = ({ todos, addTodos, requestPage, updatePage }) => {
  //string that is used to filter rendered results by their main value
  const [searchFilter, setSearchFilter] = useState("");
  //bool value that indicates if the data from API was fully fetched (that all response pages were fetched)
  const [isLoadingDone, setLoadDone] = useState(false);
  //element that intersection observer will observe to fetch data if the element is visible
  const [observedElement, setElement] = useState<HTMLElement | null>(null);

  //intersection observer - created with useRef, so with each render of the component it will not be created new instance of observer
  const intersectionObserver = useRef(
    new IntersectionObserver(
      (entries) => {
        const first_entry = entries[0];
        first_entry.isIntersecting && loader.current();
      },
      { threshold: 0.5 }
    )
  );

  //loadTodos wraps fetch with useCallback so it's refreshed when requestPage changes
  //it's used later when loader function wraps it with useRef, and loader.current() is used in intersection observer*
  //*so observer always calls loadTodos function with proper requestPage value
  const loadTodos = useCallback(() => {
    fetch(`https://gorest.co.in/public/v1/todos?page=${requestPage}`, { method: "GET" })
      .then((res) => res.json())
      .then(({ data, meta }: todos_response) => {
        if (data.length === 0) return setLoadDone(true);
        updatePage(meta.pagination.page + 1);
        addTodos(data);
      });
  }, [addTodos, requestPage, updatePage]);
  const loader = useRef(loadTodos);

  useEffect(() => {
    loader.current = loadTodos;
  }, [loadTodos]);

  useEffect(() => {
    //select current instance of observed element and of intersection observer
    const currentElement = observedElement;
    const currentObserver = intersectionObserver.current;

    //if observed element is not rendered, return
    if (!currentElement) return;

    //if observed element is rendered, observe it
    currentObserver.observe(currentElement);
    //cleanup function to unobserve element while it's being unmounted
    return () => {
      currentObserver.unobserve(currentElement);
    };
  }, [observedElement]);

  useEffect(() => {
    //initial fetch of data if the state's list is empty
    if (todos.length !== 0) return;
    loadTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <SearchBar value={searchFilter} onChange={setSearchFilter} />
      <S.ResultsWrapper>
        {todos.length === 0 ? (
          <h1>Loading initial records...</h1>
        ) : (
          //map data array and then filter rendered elements with value from search bar
          todos
            .map((todo, index: number) => <TodoResult key={index} data={todo} />)
            .filter((e) => e.props.data.title.toLowerCase().includes(searchFilter.toLowerCase()))
        )}
        {!isLoadingDone && searchFilter === "" && todos.length !== 0 && <h2 ref={setElement}>Loading...</h2>}
      </S.ResultsWrapper>
    </S.Container>
  );
};

const mapSTP = (state: AppState) => ({
  todos: state.todos.list,
  requestPage: state.todos.page,
});

const mapDTP = (dispatch: Dispatch) => ({
  addTodos: (e: todo[]) => dispatch(addTodos(e)),
  updatePage: (e: number) => dispatch(updatePage(e)),
});

export default connect(mapSTP, mapDTP)(TodosList);
