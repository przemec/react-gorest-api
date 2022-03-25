import { post, comment } from "../../api/gorest_response_models";
import * as C from "./constants"

export const enum postsOperations {
  ADD = "ADD_POSTS",
  ADD_COMMENTS = "ADD_COMMENTS_TO_POST",
  CLEAR = "CLEAR_POSTS",
  UPDATE_PAGE = "UPDATE_POSTS_PAGE",
};

export function addPosts(newposts: post[]): C.AddPostsAction {
  return { type: postsOperations.ADD, newposts };
}

export function addComments(newcomments: comment[], postID: number): C.AddCommentsToPostAction {
  return { type: postsOperations.ADD_COMMENTS, newcomments, postID };
}

export function updatePage(newpage: number): C.UpdatePageAction {
  return { type: postsOperations.UPDATE_PAGE, newpage };
}

export function clearPosts(): C.ClearPostsAction {
  return { type: postsOperations.CLEAR };
}
