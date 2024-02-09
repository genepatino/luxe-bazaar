import { createGlobalStyle } from "styled-components";

export const colors = {
  green: "#3a5a40",
};

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  };

  html{
    font-size: 62.5%;
    font-family: sans-serif;
  }
`;
