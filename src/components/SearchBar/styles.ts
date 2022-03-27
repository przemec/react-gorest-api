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
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 0.4rem;
  transition: background-color 0.3s ease-in-out;

  &:hover,
  &:focus-visible {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
    opacity: 1;
  }
`;
