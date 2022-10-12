import styled from "styled-components";

export const Container = styled.div`
margin: 20px;
background: var(--background);
height:92vh;
border-radius:80px;
display:flex;
flex-direction:column;
justify-content:center;
@media (max-width: 768px) {
    margin:0;
    border-radius:0;
    height:100vh;
    width:100vw;
    display:flex;
    height: 100%;
    flex-direction:column;
    justify-content:center;
   }
`

export const ButtonBack = styled.button`
background:transparent;
width:220px;
display: flex;
justify-content: center;
align-self:center;
margin:30px;
`

export const Address = styled.div`
background: var(--green);
width:100%;
display: flex;
justify-content: center;
align-self:center;
margin:20px;
color: var(--black)
`
