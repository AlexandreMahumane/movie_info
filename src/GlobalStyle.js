import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        
    }
    
    body{
        background-color: #000;
        height: 100vh;
        color:#fff;
        font-family: "Open Sans", sans-serif;
    }
`;