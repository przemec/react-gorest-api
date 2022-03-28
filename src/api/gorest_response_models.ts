export interface meta_response {
  pagination: {
    total: number;
    pages: number;
    page: number;
    limit: number;
    links: {
      previous: string | null;
      current: string | null;
      next: string | null;
    };
  };
}
interface gorest_response {
  meta: meta_response;
}
interface add_error {
  field: string;
  message: string;
}
export interface add_error_response extends gorest_response {
  data: add_error[];
}

type UserGender = "male" | "female";
type UserStatus = "active" | "inactive";
export interface user {
  id?: number;
  email: string;
  name: string;
  gender: UserGender;
  status: UserStatus;
}
export interface user_add_response extends gorest_response {
  data: user;
}
export interface users_response extends gorest_response {
  data: user[];
}

export type TodoStatus = "completed" | "pending";
export interface todo {
  id: number;
  user_id: number;
  due_on: string;
  title: string;
  status: TodoStatus;
}
export interface todos_response extends gorest_response {
  data: todo[];
}

export interface post {
  id?: number;
  user_id: number;
  title: string;
  body: string;
}
export interface post_add_response extends gorest_response {
  data: post;
}
export interface comment {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
}
export interface post_with_comments extends post {
  comments?: comment[];
}
export interface posts_response extends gorest_response {
  data: post[];
}
export interface comments_response extends gorest_response {
  data: comment[];
}
