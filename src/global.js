import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }

  body {
    box-sizing: border-box;
    background-color: #322c3a;
    /* overflow: hidden; */
  perspective: 400px;
  }

 

`;

export default GlobalStyle;
