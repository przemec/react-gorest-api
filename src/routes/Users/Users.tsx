import { useState, useEffect, useRef, useCallback } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../../store";
import * as S from "./styles";
import * as C from "./constants";
import { user, users_response } from "../../api/gorest_response_models";
import { addUsers, updatePage } from "../../store/users/actions";
import * as forms from "../../components/Forms";
import SearchBar from "../../components/SearchBar";
import UserResult from "../../components/UserResult";
import { GOREST_API_TOKEN } from "../../api/gorest_api_token";

const Users: React.FC<C.UsersProps> = ({ users, addUsers, requestPage, updatePage }) => {
  const NewUserForm = forms["NewUser"];
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

  const loadUsers = useCallback(() => {
    fetch(`https://gorest.co.in/public/v1/users?page=${requestPage}`, {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${GOREST_API_TOKEN}`,
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then(({ data, meta }: users_response) => {
        if (data.length === 0) return setLoadDone(true);
        console.log(data);
        updatePage(meta.pagination.page + 1);
        addUsers(data);
      });
  }, [addUsers, requestPage, updatePage]);
  const loader = useRef(loadUsers);

  useEffect(() => {
    loader.current = loadUsers;
  }, [loadUsers]);

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
    if (users.length !== 0) return;
    loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <NewUserForm />
      <SearchBar value={searchFilter} onChange={setSearchFilter} />
      <S.ResultsWrapper>
        {users.length === 0 ? (
          <h1>Loading initial records...</h1>
        ) : (
          users
            .map((user, index: number) => <UserResult key={index} data={user} />)
            .filter((e) => e.props.data.email.toLowerCase().includes(searchFilter.toLowerCase()))
        )}
        {!isLoadingDone && searchFilter === "" && users.length !== 0 && <h2 ref={setElement}>Loading...</h2>}
      </S.ResultsWrapper>
    </S.Container>
  );
};

const mapSTP = (state: AppState) => ({
  users: state.users.list,
  requestPage: state.users.page,
});

const mapDTP = (dispatch: Dispatch) => ({
  addUsers: (e: user[]) => dispatch(addUsers(e)),
  updatePage: (e: number) => dispatch(updatePage(e)),
});

export default connect(mapSTP, mapDTP)(Users);
