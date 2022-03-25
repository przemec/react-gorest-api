export interface meta_response {
  pagination: {
    total: number;
    pages: number;
    page: number;
    limit: number;
    links: {
      previous: string | null;
      current: string;
      next: string | null;
    };
  };
}

export type UserStatus = "active" | "inactive";

export interface user {
  id: number;
  gender: string;
  name: string;
  email: string;
  status: UserStatus;
}

export interface users_response {
  data: user[];
  meta: meta_response;
}

export type TodoStatus = "completed" | "pending";

export interface todo {
  id: number;
  user_id: number;
  due_on: string;
  title: string;
  status: TodoStatus;
}

export interface todos_response {
  data: todo[];
  meta: meta_response;
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

export interface posts_response {
  data: post[];
  meta: meta_response;
}
