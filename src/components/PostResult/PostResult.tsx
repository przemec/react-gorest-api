import React from "react";
import * as S from "./styles";
import * as C from "./constants";

const PostResult: React.FC<C.PostResultProps> = React.memo(({ data }) => {
  const { id, title, user_id, body } = data;

  return (
    <S.Container>
      <S.Title>
        {title} [{id}]
      </S.Title>
      <S.Author>Author: user_{user_id}</S.Author>
      <S.Body>{body}</S.Body>
      <S.Comments>Click here to load comments</S.Comments>
    </S.Container>
  );
});

export default PostResult;
