import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
`;

export const ResultsWrapper = styled.div`
  width: 100%;
  padding: 0 0.5rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > *:last-child {
    margin-bottom: 4rem;
  }
  & > h2 {
    padding: 1.5rem 0;
  }
`;

export const Link = styled(RouterLink)`
  min-height: 5vh;
  color: white;
  text-decoration: none;
  font-size: 2.6rem;

  &:hover {
    text-decoration: underline;
  }
`;
