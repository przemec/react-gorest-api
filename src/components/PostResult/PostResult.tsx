import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import * as C from "./constants";
import { comment, comments_response } from "../../api/gorest_response_models";
import { addComments } from "../../store/posts/actions";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import CommentResult from "../CommentResult";

const PostResult: React.FC<C.PostResultProps> = React.memo(({ data, addComments }) => {
  //post component has 3 states of comments load:
  //"loaded" - comments for this post are already fetched from api
  //"loading" - comments are being fetched
  //"unloaded" - comments are not fetched yet
  const [commentsLoadState, setLoadState] = useState<C.LoadState>("comments" in data ? "loaded" : "unloaded");
  const [page, setPage] = useState(1);
  const { id, title, user_id, body, comments } = data;

  const loadComments = useCallback(async () => {
    setLoadState("loading");
    fetch(`https://gorest.co.in/public/v1/posts/${id}/comments?page=${page}`, { method: "GET" })
      .then((res) => res.json())
      .then(({ data, meta }: comments_response) => {
        addComments(data, id);
        //if there is another page of comments results, set page to +1 to run useEffect and fetch a new page
        if (meta.pagination.page < meta.pagination.pages) return setPage(page + 1);
        //otherwise, set comments load state to "loaded"
        if (data) return setLoadState("loaded");
      });
  }, [addComments, id, page]);
  useEffect(() => {
    console.log("page");
    //run fetch* if there is next page of comments in previous loadComments api response
    //*but not automatically when component loads, hence page !== 1
    page !== 1 && loadComments();
  }, [page, loadComments]);

  const commentsSection = () => {
    switch (commentsLoadState) {
      case "unloaded":
        return <S.LoadComments onClick={loadComments}>Click here to load comments</S.LoadComments>;
      case "loading":
        return <h3>Loading comments...</h3>;
      case "loaded":
        return comments?.length !== 0 ? (
          <S.Comments>
            {comments?.map((comment, index: number) => (
              <CommentResult key={index} data={comment} />
            ))}
          </S.Comments>
        ) : (
          <h3>This post has no comments yet...</h3>
        );
    }
  };

  return (
    <S.Container>
      <S.Title>
        {title} [{id}]
      </S.Title>
      <S.Author>Author: user_{user_id}</S.Author>
      <S.Body>{body}</S.Body>
      {commentsSection()}
    </S.Container>
  );
});

const mapDTP = (dispatch: Dispatch) => ({
  addComments: (comments: comment[], postID: number) => dispatch(addComments(comments, postID)),
});

export default connect(null, mapDTP)(PostResult);
