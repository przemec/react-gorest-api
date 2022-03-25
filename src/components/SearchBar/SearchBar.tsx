import * as S from "./styles";
import * as C from "./constants";

const SearchBar: React.FC<C.SearchBarProps> = ({ value, onChange }) => (
  <S.SearchBarWrapper>
    <S.SearchBar value={value} onChange={(e) => onChange(e.target.value)} placeholder="Search..." />
  </S.SearchBarWrapper>
);

export default SearchBar;
