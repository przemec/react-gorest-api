import { user } from "../../api/gorest_response_models";
import { usersOperations } from "./actions";

export interface UsersState {
  list: user[];
  page: number;
}

export interface AddUsersAction {
  type: usersOperations.ADD;
  newusers: user[];
}

export interface AddSingleUserAction {
  type: usersOperations.ADD_SINGLE_USER;
  newuser: user;
}

export interface ClearUsersAction {
  type: usersOperations.CLEAR;
}

export interface UpdatePageAction {
  type: usersOperations.UPDATE_PAGE;
  newpage: number;
}