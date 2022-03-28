import { user } from "../../api/gorest_response_models";
import { usersOperations } from "./actions";

export interface UsersState {
  list: user[];
  page: number;
}

export interface AddUsers {
  type: usersOperations.ADD;
  newusers: user[];
}

export interface AddSingleUser {
  type: usersOperations.ADD_SINGLE_USER;
  newuser: user;
}

export interface ClearUsers {
  type: usersOperations.CLEAR;
}

export interface UpdatePage {
  type: usersOperations.UPDATE_PAGE;
  newpage: number;
}