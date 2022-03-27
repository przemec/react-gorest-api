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

export type UserStatus = "active" | "inactive";

export interface user {
  id: number;
  gender: string;
  name: string;
  email: string;
  status: UserStatus;
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
  id: number;
  user_id: number;
  title: string;
  body: string;
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
