import { todo } from "../../api/gorest_response_models";
import * as C from "./constants"

export const enum todosOperations {
  ADD = "ADD_TODOS",
  CLEAR = "CLEAR_TODOS",
  UPDATE_PAGE = "UPDATE_TODOS_PAGE",
};

export function addTodos(newtodos: todo[]): C.AddTodos {
  return { type: todosOperations.ADD, newtodos };
}

export function updatePage(newpage: number): C.UpdatePage {
  return { type: todosOperations.UPDATE_PAGE, newpage };
}

export function clearTodos(): C.ClearTodos {
  return { type: todosOperations.CLEAR };
}
