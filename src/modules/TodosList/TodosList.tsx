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
  const [searchFilter, setSearchFilter] = useState("");
  const [isLoadingDone, setLoadDone] = useState(false);
  const [observedElement, setElement] = useState<HTMLElement | null>(null);

  const intersectionObserver = useRef(
    new IntersectionObserver(
      (entries) => {
        const first_entry = entries[0];
        first_entry.isIntersecting && loader.current();
      },
      { threshold: 0.5 }
    )
  );

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
    const currentElement = observedElement;
    const currentObserver = intersectionObserver.current;

    if (!currentElement) return;

    currentObserver.observe(currentElement);
    return () => {
      currentObserver.unobserve(currentElement);
    };
  }, [observedElement]);

  useEffect(() => {
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
