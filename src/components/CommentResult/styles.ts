import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 70rem;
  min-height: 4rem;
  padding: 1rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 0.6rem;
  background-color: rgba(0, 0, 0, 0.05);

  @media (min-width: 800px) {
    padding: 1rem 2rem;
  }
`;

export const Title = styled.div`
  width: 100%;
  min-height: 4rem;
  padding: 1rem 0;
  font-size: 2rem;
`;

export const Author = styled.div`
  width: 100%;
  padding-top: 1rem;
  font-style: italic;
`;

export const Email = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  font-style: italic;
`;

export const Body = styled.div`
  width: 100%;
  padding: 1rem 0;
`;
