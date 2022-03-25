import { todo } from "../../api/gorest_response_models";
import * as C from "./constants"

export const enum todosOperations {
  ADD = "ADD_TODOS",
  CLEAR = "CLEAR_TODOS",
  UPDATE_PAGE = "UPDATE_TODOS_PAGE",
};

export function addTodos(newtodos: todo[]): C.AddTodosAction {
  return { type: todosOperations.ADD, newtodos };
}

export function updatePage(newpage: number): C.UpdatePageAction {
  return { type: todosOperations.UPDATE_PAGE, newpage };
}

export function clearTodos(): C.ClearTodosAction {
  return { type: todosOperations.CLEAR };
}
