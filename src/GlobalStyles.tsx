import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: white;
  }
  
  li {
    list-style: none;
  }
  
  a {
    color: black;
    text-decoration: none;
  }
  
  @media all and (max-width: 475px) {
    * {
      overflow: auto;
    }
  }
  `;
