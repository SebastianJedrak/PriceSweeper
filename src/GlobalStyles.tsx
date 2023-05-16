import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1,h2 {
    margin: 30px 0;
    text-align: center;

  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-weight: 600;
    font-size: 1.8rem;
  }

  h3 {
    font-weight: 500;
  }
  
  body {
    background-color: white;
  }
  
  li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  
  @media all and (max-width: 475px) {
    * {
      overflow: auto;
    }
  }
  `;
