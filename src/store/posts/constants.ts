import { comment, post, post_with_comments } from "../../api/gorest_response_models";
import { postsOperations } from "./actions";

export interface PostsState {
  list: post_with_comments[];
  page: number;
}

export interface AddPosts {
  type: postsOperations.ADD;
  newposts: post[];
}

export interface AddCommentsToPost {
  type: postsOperations.ADD_COMMENTS;
  newcomments: comment[];
  postID: number;
}

export interface AddSinglePost {
  type: postsOperations.ADD_SINGLE_POST;
  newpost: post;
}

export interface ClearPosts {
  type: postsOperations.CLEAR;
}

export interface UpdatePage {
  type: postsOperations.UPDATE_PAGE;
  newpage: number;
}