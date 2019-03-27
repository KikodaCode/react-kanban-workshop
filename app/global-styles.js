import { createGlobalStyle } from 'styled-components';

import '!file-loader?name=[name].[ext]!./images/bottom_octopus.png';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    min-height: 100%;
    min-height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Pangolin', cursive;
    color: blue;
    background-color: black;
    background-image: linear-gradient(to top, #0046ff, black, black);
  }

  #app {
    padding-bottom: 300px;
    min-height: 100%;
    min-width: 100%;
    background-image: url('/bottom_octopus.png');
    background-repeat: repeat-x;
    background-position: center bottom;
  }
`;

export default GlobalStyle;
