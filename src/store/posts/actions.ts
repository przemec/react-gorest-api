import { post, comment } from "../../api/gorest_response_models";
import * as C from "./constants"

export const enum postsOperations {
  ADD = "ADD_POSTS",
  ADD_COMMENTS = "ADD_COMMENTS_TO_POST",
  ADD_SINGLE_POST = "ADD_POST",
  CLEAR = "CLEAR_POSTS",
  UPDATE_PAGE = "UPDATE_POSTS_PAGE",
};

export function addPosts(newposts: post[]): C.AddPosts {
  return { type: postsOperations.ADD, newposts };
}

export function addComments(newcomments: comment[], postID: number): C.AddCommentsToPost {
  return { type: postsOperations.ADD_COMMENTS, newcomments, postID };
}

export function addNewPost(newpost: post): C.AddSinglePost {
  return { type: postsOperations.ADD_SINGLE_POST, newpost };
}

export function updatePage(newpage: number): C.UpdatePage {
  return { type: postsOperations.UPDATE_PAGE, newpage };
}

export function clearPosts(): C.ClearPosts {
  return { type: postsOperations.CLEAR };
}
