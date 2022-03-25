import { combineReducers } from "redux";
import users from "./users";
import todos from "./todos";
import posts from "./posts";

const reducers = combineReducers({
  users,
  todos,
  posts,
});

export default reducers;
