import { comment, post, post_with_comments } from "../../api/gorest_response_models";
import { postsOperations } from "./actions";

export interface PostsState {
  list: post_with_comments[];
  page: number;
}

export interface AddPostsAction {
  type: postsOperations.ADD;
  newposts: post[];
}

export interface AddCommentsToPostAction {
  type: postsOperations.ADD_COMMENTS;
  newcomments: comment[];
  postID: number;
}

export interface ClearPostsAction {
  type: postsOperations.CLEAR;
}

export interface UpdatePageAction {
  type: postsOperations.UPDATE_PAGE;
  newpage: number;
}