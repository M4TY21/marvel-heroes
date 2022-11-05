import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body,
  html {
    height: 100%;

    font: 400 1rem "Poppins", sans-serif;
    background: #242424;
    color: #fafafa;
  }
`;
