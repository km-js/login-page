import styled from "styled-components";

export const FormContainer = styled.div`
width: 85%;
min-width: 100px;
height: 70%;
display: flex;
justify-content: center;
align-items: center;
padding: 5%;
`
export const MainForm = styled.form`
display: flex;
flex-direction: column;
padding: 5%;
width: 100%;
border-radius: 12px;
background: #FFF;
box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
`

export const FormHeading = styled.h1`
font-size: 48px;
font-weight: 700;
padding: 20px;
text-align: center;
color: #04072F;
margin-top: 15px;
`

export const FormLabel = styled.label`
font-size: 15px;
font-weight: 500;
margin: 2% 1%;
color: ${(props) => props.color};
text-decoration: ${(props) => props.textDecoration};
font-weight: ${(props) => props.fontWeight};
text-align: ${(props) => props.textAlign};
cursor: ${(props) => props.cursor};

@media (max-width: 600px) {
    width: ${(props) => props.width};
  }
`

export const FormInput = styled.input`
padding: 10px;
border-radius: 8px;
border: 1px solid rgba(4, 7, 47, 0.40);
font-weight: 400;
color: rgba(115, 123, 134, 1);
`
export const Container2 = styled.div`
display: flex;
margin-top: ${(props) => props.marginTop};
width: ${(props) => props.width};
& label{
    padding-top: 5px;
    width: 90%;   
}
`
export const Container3 = styled.div`
display: flex;
margin-top: -5px;

& label{
    width: 90%;
}
`
export const Container1 = styled.div`
display: flex;
justify-content: space-between;
`

export const Button = styled.button`
width: 90%;
text-align: center;
margin: 5%;
height: 46px;
background: #1575A7;
color: #fff;
border-radius: 8px;
font-size: 18px;
font-weight: 500;
border: 0;
outline: 0;
cursor: pointer;

&:hover{
    background: #87CEEB;
}
`