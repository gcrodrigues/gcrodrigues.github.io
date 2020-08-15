import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing:border-box;
  }

 /*  html{
    --primary-color: #A628A6;
    --secundary-color: #9B1FFF;

    --complement-color: #2a2e35;
    --background-color: #12181b;
    
    --text-color: #f5f5f5;
  } */

  body{
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: "Open Sans", sans-serif; 
  }

  body::-webkit-scrollbar {
    width: .45rem;
  }
  
  body::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.complement};
  }
  
  body::-webkit-scrollbar-thumb {
    background:${(props) => props.theme.colors.secundary};
  }


  #root{
    min-height: 600px;
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
`;
