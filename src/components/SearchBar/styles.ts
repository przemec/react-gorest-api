import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  width: 100%;
  padding: 1rem 0.5rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SearchBar = styled.input`
  width: 100%;
  max-width: 60rem;
  height: 3rem;
  padding: 2rem;
  text-align: center;
  font-size: 1.7rem;
  color: rgb(255, 255, 255);
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 0.4rem;

  &:hover {
    background: rgba(255, 255, 255, 0.35);
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
    opacity: 1;
  }
`;
