import { todo } from "../../api/gorest_response_models";
import { todosOperations } from "./actions";

export interface TodosState {
  list: todo[];
  page: number;
}

export interface AddTodosAction {
  type: todosOperations.ADD;
  newtodos: todo[];
}

export interface ClearTodosAction {
  type: todosOperations.CLEAR;
}

export interface UpdatePageAction {
  type: todosOperations.UPDATE_PAGE;
  newpage: number;
}