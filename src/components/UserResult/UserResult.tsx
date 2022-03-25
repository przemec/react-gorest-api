import React, { useEffect, useState } from "react";
import * as S from "./styles";
import * as C from "./constants";

const UserResult: React.FC<C.UserResultProps> = React.memo(({ data }) => {
  const [isExpanded, setExpansion] = useState(false);
  const { name, gender, email, id, status } = data;

  useEffect(() => {
    setExpansion(false);
  }, [data]);

  return (
    <S.Container>
      <S.Title onClick={() => setExpansion(!isExpanded)}>
        [{id}] {email}
      </S.Title>
      {isExpanded && (
        <S.Details>
          <S.DetailRow>Name: {name}</S.DetailRow>
          <S.DetailRow>Status: {status}</S.DetailRow>
          <S.DetailRow>Gender: {gender}</S.DetailRow>
        </S.Details>
      )}
    </S.Container>
  );
});

export default UserResult;
