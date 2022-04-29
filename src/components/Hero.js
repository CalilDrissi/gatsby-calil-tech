import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { GithubOriginalIcon,  TwitterOriginalIcon} from "react-devicons";

const Container = styled.div`
      width:  clamp(30vw,550px, 550px);
       position: fixed;
       padding-left: 22px ;
      height: 80vh;
      display: flex ;
      flex-direction: column ;
      justify-content: space-between ;
       @media (max-width: 990px) {
            position: relative;
            width: 100% ;
            padding: 0 10%;
            height: 40vh ;
            & nav {
                  display: none ;
            }

            @media (max-width: 490px) {
            position: relative;
            width: 100% ;
            padding: 0 10%;
            height: 50vh ;
            & nav {
                  display: none ;
            }
}

`

const Heading = styled.h1`
    font-size: 70px;
    font-weight: 900;
    line-height: 1.05 ;
    @media (max-width: 500px) {
          font-size: 50px ;
    }
`

const  Part1 = styled.div`
display: block ;
font-size: 32px ;
font-weight: 200 ;
line-height: 1.05 ;
`

const  Part2 = styled.div`
display: block ;
font-size: 22px ;
font-weight: 100 ;
padding-top: 32px ;
`

const Heading6 = styled.h6`
      font-weight: 100 ;
      line-height: 1.1 ;
      font-size: 16px ;
`

const Tabs = styled.nav`
      cursor: pointer;
      font-weight: 100 ;
`

const Connect = styled.div`
      display: flex;
      gap: 20px;
      align-items: center ;
      cursor: pointer;
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

            <div>
            <Heading6 >Hi, my name is</Heading6>
        <Heading data-hover="this is the data-hover content">
        <span data-tip='خليل'>Calil </span><ReactTooltip textColor='#eee' backgroundColor='black' />
         Drissi</Heading>
          <Part1>I Develop Computer Software.</Part1>
          <Part2>I'm a software engineer specializing in building and designing
          exceptional digital experiences.</Part2>

            </div>
     
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
