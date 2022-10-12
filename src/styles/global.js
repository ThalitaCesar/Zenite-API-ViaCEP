import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root{
    --background:linear-gradient(0deg, rgba(60,103,75,1) 7%, rgba(83,147,110,1) 100%);
    --grey:#f0f0f0;
    --green: #95d0ad;
    --black:#1e1c1c ;
    --background-card: #d1dcd4;
}

 *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Inter', sans-serif;
 }
 input::placeholder {
   color: var(--grey);
 }
html{
    @media(max-width: 1000px){
        font-size: 93.75%
    }
    @media(max-width: 720px){
        font-size: 87.05%
    }
}
 body{
    background: var(--black);
 }
 body, input, textarea, button{
    font-weight: 400;
    color: var(--grey);
 }
 h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
    color: var(--grey);
 }
 a{
    font-weight: 600;
    color: var(--grey);
    
 }
 a:hover{
    color: var(--grey) 
    }

 button{
    cursor:pointer;
    border-style:none;
    border-radius:60px;
    background:var(--background);
    border: 2px solid var(--grey);
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    display:flex ;
    justify-content:space-between;
 }
[disable]{
    visable:0.6;
    cursor: not-allowed;
}
`