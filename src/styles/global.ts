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


export const GlobalStyle = createGlobalStyle`

*::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color:white;
    border-radius: 5px;
  }
  
  *::-webkit-scrollbar-track {
    background-color:white;
    border-radius: 5px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 5px;
  }

  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
  
  body{
    background-color: white;
    max-width: 1400px;
    margin: 0 auto;
  };

  html{
    font-size: 62.5%;
    font-family: sans-serif;
  }
`;
