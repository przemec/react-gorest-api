import { todosOperations } from "./actions";
import * as C from "./constants";

type Action = C.AddTodosAction | C.ClearTodosAction | C.UpdatePageAction;

const todos = (state: C.TodosState = { list: [], page: 1 }, action: Action) => {
  switch (action.type) {
    case todosOperations.ADD:
      return { ...state, list: [...state.list, ...action.newtodos] };
    case todosOperations.CLEAR:
      return { list: [], page: 1 };
    case todosOperations.UPDATE_PAGE:
      return { ...state, page: action.newpage };
    default:
      return state;
  }
};

export default todos;
