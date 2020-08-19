import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 55%;
  }

  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing:border-box;
  }

  body{
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: "Open Sans", sans-serif; 
  }

  body::-webkit-scrollbar {
    width: .72rem;
  }
  
  body::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.complement};
  }
  
  body::-webkit-scrollbar-thumb {
    background:${(props) => props.theme.colors.secundary};
  }


  #root{
    min-height: 650px;
  }

  html, body, #root {
    height: 100%;
    width: 100%
  }

  input, button, textarea{
    font-family: "Roboto", Arial, Helvetica, sans-serif;
  }

  button{
    cursor:pointer;
  }

  @media (min-width: 700px) {
    :root{
      font-size: 62.5%;

    }
  }
`;
