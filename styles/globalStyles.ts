import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Proxima Nova';
    src: url('/fonts/ProximaNova.otf');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Abril Fatface';
    src: url('/fonts/AbrilFatface.ttf');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
  *,
  *:after,
  *:before { box-sizing: border-box; }
  html, body {
    min-height: 100vh;
  }
  html {
    min-height: 100vh;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    color: grey;
    margin: 0;
    font-family: 'Proxima Nova', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  strong, b {
    font-weight: 600;
  }
  div[role="group"][tabindex] {
    display: block;
    min-height: 100vh;
    position: relative;
  }
  div.integrator {
    border: 0px;
  }
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  #app {
    overflow-x: hidden;
  }
`;

export default GlobalStyles;
