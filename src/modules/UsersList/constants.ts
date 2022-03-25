import { user } from "../../api/gorest_response_models";

export interface UsersProps {
  users: user[],
  addUsers: Function,
  requestPage: number,
  updatePage: Function,
}
