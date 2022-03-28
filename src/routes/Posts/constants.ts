import { post } from "../../api/gorest_response_models";

export interface PostsProps {
  posts: post[],
  addPosts: Function,
  requestPage: number,
  updatePage: Function,
}
