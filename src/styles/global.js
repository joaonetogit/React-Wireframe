import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: "Inter", sans-serif;
  }

  img {
    max-width: 100%;
    display: block;
  }

  html {
    font-size: 62.5%;

    @include responsive(480px) {
      font-size: 55%;
    }
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
