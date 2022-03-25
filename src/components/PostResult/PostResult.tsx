import React, { useEffect, useState } from "react";
import * as S from "./styles";
import * as C from "./constants";

const PostResult: React.FC<C.PostResultProps> = React.memo(({ data }) => {
  const [isExpanded, setExpansion] = useState(false);
  const { id, title, user_id, body } = data;

  useEffect(() => {
    setExpansion(false);
  }, [data]);

  return (
    <S.Container>
      <S.Title onClick={() => setExpansion(!isExpanded)}>
        [{id}] {title}
      </S.Title>
      {isExpanded && (
        <S.Details>
          <S.DetailRow>User: {user_id}</S.DetailRow>
          <S.DetailRow>{body}</S.DetailRow>
        </S.Details>
      )}
    </S.Container>
  );
});

export default PostResult;
