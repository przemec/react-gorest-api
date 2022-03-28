import { todo } from "../../api/gorest_response_models";
import { todosOperations } from "./actions";

export interface TodosState {
  list: todo[];
  page: number;
}

export interface AddTodos {
  type: todosOperations.ADD;
  newtodos: todo[];
}

export interface ClearTodos {
  type: todosOperations.CLEAR;
}

export interface UpdatePage {
  type: todosOperations.UPDATE_PAGE;
  newpage: number;
}