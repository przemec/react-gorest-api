import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Header = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  display: flex;
  padding: 0 4rem;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background: #a83232;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const Link = styled(RouterLink)`
  height: 6rem;
  line-height: 6rem;
  color: #ddd;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;
