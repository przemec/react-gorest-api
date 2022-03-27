import { post_with_comments } from "../../api/gorest_response_models";

export interface PostResultProps {
  data: post_with_comments;
  addComments: Function;
}

export type LoadState = "loaded" | "loading" | "unloaded"