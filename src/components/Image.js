import React from 'react'
import { ImageContainer, MainImage } from './Image.style'
import imgUrl from '../assets/images/kkk.png';

function Image() {
  return (
   <ImageContainer>
    <MainImage src={imgUrl} alt='main-image'></MainImage>
   </ImageContainer>
  )
}

export default Image