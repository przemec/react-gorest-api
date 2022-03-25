import { todo, TodoStatus } from "../../api/gorest_response_models";

export interface TodoResultProps {
  data: todo;
}

export interface ContainerProps {
  todoStatus: TodoStatus;
  isExpanded: boolean;
}
