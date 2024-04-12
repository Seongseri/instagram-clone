import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}

@font-face {
    font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  input {
    border-style: none;
    cursor: pointer;
  }

  button {
    border-style: none;
    cursor: pointer;

  }
  ol, ul, li {
    list-style: none;
  }

`;

export default GlobalStyles;
