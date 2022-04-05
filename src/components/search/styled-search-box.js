import styled, { css } from 'styled-components';
import SearchBox from './search-box';

const open = css`
  width: 10rem;
  background: ${({ theme }) => theme.background};
  color: black;
  cursor: text;
  margin-left: -1.6rem;
  padding-left: 1.6rem;
`;

const closed = css`
  width: 0;
  background: transparent;
  color: white;
  cursor: pointer;
  margin-left: -1rem;
  padding-left: 1rem;
`;

export default styled(SearchBox)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 0;

  .SearchInput {
    outline: none;
    border: ${({ hasFocus }) => (hasFocus ? 'auto' : 'none')};
    font-size: 1rem;
    transition: 100ms;
    border-radius: 2px;
    color: ${({ theme }) => theme.foreground};
    ::placeholder {
      color: ${({ theme }) => theme.faded};
    }
    ${({ hasFocus }) => (hasFocus ? open : closed)}
  }

  .SearchIcon {
    width: 1rem;
    margin: 0.3rem;
    cursor: pointer;
    pointer-events: none;
  }
`;
