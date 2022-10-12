import styled from "styled-components";

export const Container = styled.div`
margin: 20px;
background: var(--background);
height:92vh;
border-radius:80px;
@media (max-width: 768px) {
   margin:0;
   border-radius:0;
   height:100vh;
   overflow-y:hidden;
   width:100vw;
   display:flex;
   flex-direction:column;
   justify-content:center;
  }
`

export const FlexContent = styled.div`
display:flex;
justify-content:center;
margin-top:40px;
@media (max-width: 768px) {
    flex-direction: column;
    margin:0;
    align-items:center;
    margin: 30px;
    width:350px;
  }

`

export const ColumnOne = styled.div`
display:flex;
flex-direction: column;
width:40vw;
@media (max-width: 768px) {
    width:350px;
  }
.title{
    font-weight: 600;
    font-size:54px;
    margin:16px;
    @media (max-width: 768px) {
        font-size:23px;
      }
}

.description{
    color: var(--green);
    margin:16px;
}
`

export const InputCep = styled.input`
    color: var(--green);
    padding: 10px 10px;
    text-align: center;
    placeholder:var(--green);
    text-decoration: none;
    font-size: 14px;
    background:transparent;
    border:none;
    &:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
        }
`

export const DivSubmit = styled.div`
    color: var(--grey);
    border-style:none;
    border-radius:60px;
    border: 2px solid #e95928;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    display:flex ;
    justify-content:space-between;
    width:450px;
    height: 50px;
    @media (max-width: 768px) {
        width:200px;
        margin:0;
        margin-top:30px;
        flex-direction:column;
        align-self:center;
      }
`

export const Submit = styled.button`
    background: #e95928;
    color: var(--black);
    border-style:none;
    border-radius:60px;
    padding: 15px 35px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    display:flex ;
    justify-content:center;
    font-weight: 600;
    height: 47px;
    &:hover{
        background: var(--black);
        color: var(--grey) 
        }
        @media (max-width: 768px) {
            margin-top:30px;

          }
`

export const ColumnTwo = styled.div`
width:37vw;
border-radius:50%;
`

export const ImgHome = styled.img`
width:43vw;
border-radius:50%;
@media (max-width: 768px) {
    width:300px;
    margin-top: 120px;
  }
`