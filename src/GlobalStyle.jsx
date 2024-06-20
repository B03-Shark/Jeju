import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root{
  font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 400;
  font-style: normal;
  }

  button {
  cursor: pointer;
  font-family: "IBM Plex Sans KR", sans-serif;
  }

  input {
  font-family: "IBM Plex Sans KR", sans-serif;
  }
`;

export default GlobalStyle;
