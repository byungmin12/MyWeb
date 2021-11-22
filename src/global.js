import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  

  }

  body {
    box-sizing: border-box;
    /* background: radial-gradient(#1d0f3e 30%, #010315); */
    /* background-color: white ; */
    overflow: hidden;
  }



`;

export default GlobalStyle;
