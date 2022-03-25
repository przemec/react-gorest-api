import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 60rem;
  min-height: 4rem;
  margin-bottom: 0.4rem;
  font-size: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 0.6rem;
  background-color: #555;
`;

export const Title = styled.div`
  cursor: pointer;
  width: 100%;
  height: 6vh;
  min-height: 4rem;
  padding: 0 1rem;
  line-height: 6vh;
  line-height: max(6vh, 4rem);
  text-align: center;
  border-radius: 0.6rem;
  background-color: #555;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #444;
  }
`;

export const Details = styled.div`
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DetailRow = styled.div`
  width: 100%;
  text-align: center;
`;
