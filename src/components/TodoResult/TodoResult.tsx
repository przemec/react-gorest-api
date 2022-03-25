import React, { useEffect, useState } from "react";
import * as S from "./styles";
import * as C from "./constants";

const TodoResult: React.FC<C.TodoResultProps> = React.memo(({ data }) => {
  const [isExpanded, setExpansion] = useState(false);
  const { id, title, due_on, status } = data;
  const deadline = new Date(due_on)
  const deadline_day = `${deadline.getUTCDay()}/${deadline.getUTCMonth()}/${deadline.getUTCFullYear()}`
  const deadline_hour = `${deadline.getUTCHours()}:${deadline.getUTCMinutes()}`

  useEffect(() => {
    setExpansion(false);
  }, [data]);

  return (
    <S.Container todoStatus={status} isExpanded={isExpanded}>
      <S.Title onClick={() => setExpansion(!isExpanded)}>
        [{id}] {!isExpanded && title}
      </S.Title>
      {isExpanded && (
        <S.Details>
          <S.DetailRow>{title}</S.DetailRow>
          <S.DetailRow>Deadline: {deadline_hour}, {deadline_day} (UTC)</S.DetailRow>
          <S.DetailRow>Status: {status}</S.DetailRow>
        </S.Details>
      )}
    </S.Container>
  );
});

export default TodoResult;
