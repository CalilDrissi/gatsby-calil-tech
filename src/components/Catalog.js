import React from 'react'
import styled from 'styled-components'
import { Card } from './Card';
import {CardSquare} from './CardSquare'

const Container = styled.div`
  max-width: 550px;
  max-height: 100vh;
  grid-column-start: 2;
  grid-column-end:3 ;
 
 margin-left: .5rem;

`

const  BoxSquare = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-items: stretch ;
grid-gap: 1rem ;
margin-top: 3rem ;
margin-bottom: 20px ;
&:hover > div:not(:hover){
  opacity: 0.5;
}
`

const BoxRec = styled.div`
 display: flex ;
  gap: 16px;
  flex-direction: column;
&:hover > div:not(:hover){
  opacity: 0.5;
}
`

export const Catalog = () => {
  return (
    <>
    <Container>

          <BoxRec>

        
            <Card type="Front-end" title="ColegioLink"/>
            <Card  type="Full-Stack" title="Magic Menu"/>
            <Card  type="Mobile" title="Radio"/>
            </BoxRec>

            <BoxSquare>
              
            <CardSquare type="Desktop" title="WowSocks"/>
            <CardSquare type="Desktop" title="WowSocks"/>
            <CardSquare type="Desktop" title="WowSocks"/>
            <CardSquare type="Desktop" title="WowSocks"/>
            
            </BoxSquare>
           
          
  </Container>
  </>
  )
}
