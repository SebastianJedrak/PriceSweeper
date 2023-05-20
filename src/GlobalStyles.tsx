import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    line-height: 120%;
  }

  h2 {
    font-weight: 400;
    font-size: 1.8rem;
    margin: 30px 0;
    text-align: center;
    @media all and (max-width: 1000px) {
      font-size: 1.6rem;
    }

    @media all and (max-width: 600px) {
      font-size: 1.4rem;
    }
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 500;
  }
  
  body {
    background-color: #fffaef;
  }
  
  li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }

  select {
    background-color: #f4fbea;
    color: #19150a;
    border-radius: 2.5px;
    cursor: pointer;
  }

  select:hover {
    background-color: #eaf7d5
  }

  select:focus-visible {
    outline: 1px dotted black;
  }
`;
