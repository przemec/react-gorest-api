import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 70rem;
  min-height: 4rem;
  margin-bottom: 2rem;
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
`;

export const Title = styled.div`
  width: 100%;
  min-height: 4rem;
  padding: 1rem 0;
  font-size: 2rem;
  border-radius: 0.6rem;
`;

export const Author = styled.div`
  width: 100%;
  min-height: 4rem;
  font-size: 2rem;
  border-radius: 0.6rem;
`;

export const Body = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Comments = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
