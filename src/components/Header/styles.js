import styled from "styled-components";

export const Container = styled.header`
height: 80px;
max-width: 100vw;
background: transparent;
align-items: center;
display:flex;
justify-content: space-between;
`

export const MenuLinks = styled.div`
display:flex;
flex-direction: center;
align-items:center;
margin:80px;
@media (max-width: 768px) {
    display:none;
  }
`

export const MenuButtons = styled.button`
border: none;
background: transparent;
color: var(--grey);
font-weight: 600;
margin: 3px 30px;
&:hover{
    color: var(--green)
}
`

export const Content = styled.div`
margin: 0 auto;
height: 80px;
padding-left: 3rem ;
padding-top: 5px ;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const Title = styled.p`
font-weight: 600;
font-size:24px;
@media (max-width: 768px) {
    font-size: 22px;
    margin-right: 40px;
  }
`

export const ButtonLogin = styled.button`
font-weight: 500;
margin-right:16px;
background: transparent;
&:hover{
    background: var(--black);
    color: var(--grey)
    }

`

export const ButtonGroup= styled.div`
display:flex;
`