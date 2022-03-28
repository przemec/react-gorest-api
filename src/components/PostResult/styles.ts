import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 70rem;
  min-height: 4rem;
  margin-top: 3rem;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 0.6rem;
  background-color: rgba(0, 0, 0, 0.1);

  @media (min-width: 800px) {
    padding: 2rem 3rem;
  }
  & > h3 {
    margin: 1rem;
    font-style: italic;
  }
`;

export const Title = styled.div`
  width: 100%;
  min-height: 4rem;
  padding: 1rem 0;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 0.6rem;
`;

export const Author = styled.div`
  width: 100%;
  min-height: 4rem;
  font-size: 2rem;
  font-style: italic;
  border-radius: 0.6rem;
`;

export const Body = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

export const Comments = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const LoadComments = styled.div`
  cursor: pointer;
  display: inline;
  width: 100%;
  padding: 1rem 0;
  font-size: 2rem;
  font-style: italic;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;
