import React from "react";
import * as S from "./styles";
import * as C from "./constants";

const CommentResult: React.FC<C.CommentResultProps> = React.memo(({ data }) => {
  const { id, name, email, body } = data;

  return (
    <S.Container>
      <S.Title>Answer #{id}</S.Title>
      <S.Body>{body}</S.Body>
      <S.Author>Author: {name}</S.Author>
      <S.Email>({email})</S.Email>
    </S.Container>
  );
});

export default CommentResult;
