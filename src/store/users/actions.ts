import { user } from "../../api/gorest_response_models";
import * as C from "./constants"

export const enum usersOperations {
  ADD = "ADD_USERS",
  CLEAR = "CLEAR_USERS",
  UPDATE_PAGE = "UPDATE_USERS_PAGE",
};

export function addUsers(newusers: user[]): C.AddUsersAction {
  return { type: usersOperations.ADD, newusers };
}

export function updatePage(newpage: number): C.UpdatePageAction {
  return { type: usersOperations.UPDATE_PAGE, newpage };
}

export function clearUsers(): C.ClearUsersAction {
  return { type: usersOperations.CLEAR };
}
