import { usersOperations } from "./actions";
import * as C from "./constants";

type Action = C.AddUsersAction | C.ClearUsersAction | C.UpdatePageAction | C.AddSingleUserAction;

const users = (state: C.UsersState = { list: [], page: 1 }, action: Action) => {
  switch (action.type) {
    case usersOperations.ADD:
      return { ...state, list: [...state.list, ...action.newusers] };
    case usersOperations.ADD_SINGLE_USER:
      return { ...state, list: [action.newuser, ...state.list] };
    case usersOperations.CLEAR:
      return { list: [], page: 1 };
    case usersOperations.UPDATE_PAGE:
      return { ...state, page: action.newpage };
    default:
      return state;
  }
};

export default users;
