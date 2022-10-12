import styled from "styled-components";

export const Card = styled.div`
background: transparent;
height: 280px;
width: 400px;
border-radius: 20px;
display:flex;
flex-direction: row;
justify-conten:center;
align-items: center;
@media (max-width: 768px) {
    margin-top:40px;
    width:320px;
    }

`
// box-shadow: -16px 20px var(--green);
export const Img = styled.img`
height:160px;
margin-top:-30px;
@media (max-width: 768px) {
    height:120px;
    }
`

export const Title = styled.p`
font-size:20px;
margin-top: 16px;
font-weight: 600;
color: var(--black);
`

export const Price = styled.p`
font-size:40px;
color: #3c674b;
font-weight: 600;
margin:16px;
.small{
    font-size:20px; 
}
@media (max-width: 768px) {
    font-size:28px;
    .small{
        font-size:14px; 
    }
    }
`
export const Button = styled.button`
background: #e95928;
border-style:none;
padding: 10px 10px;
text-align: center;
text-decoration: none;
font-size: 16px;
display:flex ;
justify-content:center;
align-self:center;
font-weight: 600;
height: 47px;
width: 120px;
&:hover{
    background: var(--black);
    color: var(--grey) 
    }
`

export const Flex = styled.div`
display:flex;
flex-direction:row;
justify-content: space-around;
align-items:end;
margin-top:60px;
@media (max-width: 768px) {
    flex-direction:column;
    }
`

export const Content = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
background: var(--background-card);
border-radius:60px;
height: 280px;
width: 350px;
text-align:center;
@media (max-width: 768px) {
    height: 280px;
width: 170px;
    }

`