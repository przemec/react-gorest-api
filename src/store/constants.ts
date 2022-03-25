import { UsersState } from "./users/constants";
import { TodosState } from "./todos/constants";
import { PostsState } from "./posts/constants";

export default interface AppState {
  users: UsersState;
  todos: TodosState;
  posts: PostsState;
}
