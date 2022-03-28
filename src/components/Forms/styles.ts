import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 60rem;
  margin: 3rem auto 0;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.1);
`;

export const FormRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.label`
  text-align: center;
  margin-bottom: 0.4rem;
  font-size: 1.8rem;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.6rem;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  text-align: center;
`;

export const Select = styled.select`
  width: 100%;
  font-size: 1.6rem;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  text-align: center;
`;

export const Option = styled.option`
  background-color: #bbb;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  min-width: 22rem;
  font-size: 1.8rem;
  margin-top: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  text-align: center;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;
