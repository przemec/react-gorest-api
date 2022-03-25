import { todo } from "../../api/gorest_response_models";

export interface TodosProps {
  todos: todo[],
  addTodos: Function,
  requestPage: number,
  updatePage: Function,
}
