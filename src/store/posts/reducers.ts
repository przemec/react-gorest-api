import { postsOperations } from "./actions";
import * as C from "./constants";

type Action = C.AddPosts | C.ClearPosts | C.UpdatePage | C.AddCommentsToPost | C.AddSinglePost;

const posts = (state: C.PostsState = { list: [], page: 1 }, action: Action) => {
  switch (action.type) {
    case postsOperations.ADD:
      return { ...state, list: [...state.list, ...action.newposts] };
    case postsOperations.CLEAR:
      return { list: [], page: 1 };
    case postsOperations.ADD_COMMENTS:
      const editedList = state.list.map((post) => {
        //if id of post is not equal to id of post that is being edited, then return original post
        if (post.id !== action.postID) return post;
        //if there is no "comments" key in post object, then create one
        if (!post.comments) return { ...post, comments: [...action.newcomments] };
        //if there is "comments" key in post object, just add new comments to array
        return { ...post, comments: [...post.comments, ...action.newcomments] };
      });
      return { ...state, list: editedList };
    case postsOperations.ADD_SINGLE_POST:
      return { ...state, list: [action.newpost, ...state.list] };
    case postsOperations.UPDATE_PAGE:
      return { ...state, page: action.newpage };
    default:
      return state;
  }
};

export default posts;
