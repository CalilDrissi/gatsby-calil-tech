import React from 'react'
import styled from 'styled-components'
import { Card } from './Card';
import {CardSquare} from './CardSquare'


const Container = styled.div`
   width:  clamp(30vw,45vw, 550px);
  grid-column-start: 2;
  grid-column-end:3 ;
  padding-right: 10px ;
 margin-left: .5rem;

 @media (max-width: 990px) {
  grid-row-start: 2;
  width: 100% ;
  grid-column-start: 1;
  grid-column-end:2 ;
  padding: 0 10%;
}

@media (max-width: 490px) {
    grid-row-start: 2 ;


}

`

const  BoxSquare = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-items: stretch ;
grid-gap: 1rem ;
margin-top: 3rem ;
margin-bottom: 20px ;

@media (max-width: 580px) {
    grid-template-columns: 1fr ;


}
&:hover > div:not(:hover){
  opacity: 0.5;
}
`

const BoxRec = styled.div`
width: 100% ;
 display: flex ;
  gap: 16px;
  flex-direction: column;
&:hover > div:not(:hover){
  opacity: 0.5;
}
`
const HeadingCat = styled.h2`
      font-size: 22px ;
      text-decoration: underline;
      font-weight: 500 ;
      margin: 2rem  0;
      display: none ;

      @media (max-width: 990px){
        display: block ;
      }
`

export const Catalog = () => {
  return (
    <>
    <Container>

        <HeadingCat>Most Recent Projects</HeadingCat>
          <BoxRec id="section1">
            <Card type="Front-end" title="ColegioLink"/>
            <Card  type="Full-Stack" title="Magic Menu"/>
            <Card  type="Mobile" title="Radio"/>
            </BoxRec>


            <HeadingCat> Older Projects  </HeadingCat>
            <BoxSquare   id="section2">
            <CardSquare type="Desktop" title="WowSocks"/>
            <CardSquare type="Desktop" title="WowSocks"/>
            <CardSquare type="Desktop" title="WowSocks"/>
            <CardSquare  type="Desktop" title="WowSocks"/>
            </BoxSquare>
           
          
  </Container>
  </>
  )
}
