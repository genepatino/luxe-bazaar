import { createGlobalStyle } from "styled-components";

export const colors = {
  green: "#3a5a40",
  lightgray: "#e5e5e573"
};

export const fonts = {
  primary: 'Space Grotesk'
}

export const GlobalStyle = createGlobalStyle`
  body{
    /* display: flex;
    place-content: center; */
    max-width: 1400px;
    height: 100dvh;
    margin: 0 auto;
    font-family: ${fonts.primary}, sans-serif;
  };

  html{
    font-size: 62.5%;
    font-family: sans-serif;
  }
`;
