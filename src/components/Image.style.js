import styled from "styled-components";

export const ImageContainer = styled.div`
width: 35%;
min-width: 560px;
display: flex;
justify-content: center;
align-items: center;
height: 90%;

@media (max-width: 600px) {
 display: none;
  }
`

export const MainImage = styled.img`
width: 50%;
height: 60%;
`