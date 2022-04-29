import React from 'react';
import styled from 'styled-components';
import { GithubOriginalIcon,  TwitterOriginalIcon} from "react-devicons";

const Container = styled.div`
      max-width: 550px;
       height: 100vh;
       position: fixed;
       padding-left: 10px ;

`

const Heading = styled.h1`
    font-size: 70px;
    font-weight: 900;
    line-height: 1.05 ;
    &:hover {

    }
`
 
const  Part1 = styled.div`
display: block ;
font-size: 32px ;
font-weight: 200 ;
margin-bottom: 40px;
line-height: 1.05 ;
`

const  Part2 = styled.div`
display: block ;
font-size: 22px ;
font-weight: 100 ;
margin-bottom: 100px;
`

const Heading6 = styled.h6`
      font-weight: 100 ;
      line-height: 1.1 ;
      font-size: 16px ;
`

const Tabs = styled.div`
margin-top: 200px ;
      margin-bottom: 100px;
      cursor: pointer;
      font-weight: 100 ;
`

const Connect = styled.div`
      display: flex;
      gap: 20px;
      align-items: center ;
      cursor: pointer;
      margin-top: 20% ;
      font-weight: 100 ;
`
const Photo = styled.div`
      width: 50px;
      height: 50px;
      background: #eee ;
      border-radius: 50% ;
      cursor: auto;
      overflow: clip;
      padding-top: 1px ;
      border-style: none;

`
const ProfileImg = styled.img`
    max-width: 100%;
    height: auto ;
    filter: grayscale(100%);
    transition: all .2s ease-in ;


     &:hover {
      filter: grayscale(0%);
      transform: scale(1.05) ;
}
`

const SocialLink = styled.a`
   text-decoration: none ;
   margin-left: 5px ;
   transition: all .2s ease-out ;
   &:hover{
         text-decoration: underline ;
            opacity: .5 ;
   }
`

export const Hero = () => {
  return (
      <>
      <Container>
        <Heading6>Hi, my name is</Heading6>
        <Heading data-hover="this is the data-hover content">Calil Drissi</Heading>
          <Part1>I Develop Computer Software.</Part1>
          <Part2>I'm a software engineer specializing in building and designing
          exceptional digital experiences.</Part2>

          <Tabs>
          <p>01---Most Recent Projects</p>
          <p>02---Older Projects</p>
          {/* For Version 2.0 <p>03---Tech Articles</p> */}
          </Tabs>
        

          <Connect>
            <Photo>
              < ProfileImg  src="3.jpeg"  alt="me" />
            </Photo>
            <p>
            <TwitterOriginalIcon size="15px" color="white" />
                  <SocialLink>Twitter </SocialLink>
            
            </p>
            <p>
            <GithubOriginalIcon size="15px" color="white" />
            <SocialLink>  Github</SocialLink>
                
            </p>
          </Connect>

      </Container>
      </>
  )
}
