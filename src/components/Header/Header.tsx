import * as S from "./styles";

const Header: React.FC = () => (
  <S.Header>
    <S.Link to="/">Home</S.Link>
    <S.Link to="/users">Users</S.Link>
    <S.Link to="/posts">Posts</S.Link>
    <S.Link to="/todos">Todos</S.Link>
  </S.Header>
);

export default Header;
