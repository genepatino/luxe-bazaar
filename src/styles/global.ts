import { createGlobalStyle } from "styled-components";

export const colors = {
  green: "#3a5a40",
  buttongreen: "#335339",
  lightgray: "#e5e5e573",
  yellow: "#F4CE68",
  salmon: "#dfc1aa",
  ligthred: "#b03a3a",
  gray: "#b9afaf"
};

export const fonts = {
  primary: 'Space Grotesk'
}

export const GlobalStyle = createGlobalStyle`
  body{
    background-color: white;
    max-width: 1400px;
    margin: 0 auto;
    font-family: ${fonts.primary}, sans-serif;
  };

  html{
    font-size: 62.5%;
    font-family: sans-serif;
  }
`;
