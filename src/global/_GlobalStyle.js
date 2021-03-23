import { createGlobalStyle } from 'styled-components';

const _GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
  }
  
  html {
    overflow: hidden;
    touch-action: "none";
  }

  body {
    background-color: black;
  }

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 0px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  #my-canvas {
    width: 100%;
    height: 100vh;
    z-index: 15;
  }
`;

export default _GlobalStyle;