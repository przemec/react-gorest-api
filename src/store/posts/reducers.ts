import { postsOperations } from "./actions";
import * as C from "./constants";

type Action = C.AddPostsAction | C.ClearPostsAction | C.UpdatePageAction | C.AddCommentsToPostAction;

const posts = (state: C.PostsState = { list: [], page: 1 }, action: Action) => {
  switch (action.type) {
    case postsOperations.ADD:
      return { ...state, list: [...state.list, ...action.newposts] };
    case postsOperations.CLEAR:
      return { list: [], page: 1 };
    case postsOperations.ADD_COMMENTS:
      const edited = state.list.map((post) => {
        if (post.id === action.postID) {
          post.comments = action.newcomments
        }
        return post;
      });
      return edited;
    case postsOperations.UPDATE_PAGE:
      return { ...state, page: action.newpage };
    default:
      return state;
  }
};

export default posts;
