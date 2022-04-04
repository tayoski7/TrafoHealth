import React from 'react'
import styled from 'styled-components'
import  BG from '../Images/backgrnd.png'
import Wash from '../Images/wash.jpg'
import { AiOutlineArrowRight } from "react-icons/ai"

export const Hero = () => {
  return (
    <HeroContainer>
        <HeroWrap>
            <HeroLeft>
                <Head>Medical Care <br/>simplified for<br/>everyone</Head>
                <Para>A new way to transform your daily medical care <br/>into the simplest and effective one</Para>
                <Button>Try for free<AiOutlineArrowRight/></Button>
            </HeroLeft>
            <HeroRight></HeroRight>
        </HeroWrap>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
   color: white;
   width: 100%;
   display: flex;
   justify-content:center;
   
`

const HeroWrap = styled.div`
   width: 90%;
   height: 500px;
   display: flex;
    @media screen and (max-width: 768px){
      width:100%;
         display: flex;
         flex-direction: column;
         /* justify-content: space-around; */
         height: 800px;
    }


`

const HeroLeft = styled.div`
   background-image: url(${BG});
   width: 50%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   @media screen and (max-width: 768px){
     width: 100%;
     padding: 0 0 10px;
     /* margin-bottom: 100px; */
     
   }
`

const Head = styled.h1`
font-size: 50px;
width:90%;
`

const Para = styled.p`
width:95%;
`

const Button = styled.div`
  background-color: #00A962;
  width: 120px;
  height: 40px;
  color: white;
  padding: 5px 0 0 0;
  text-align: center;
  margin-right: 210px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width:875px){
    display:flex;
    margin-left:20%;
  }
  @media screen and (max-width:426px){
    margin-left:50%;
  }
  @media screen and (max-width:321px){
    margin-left:60%;
  }
`

const HeroRight = styled.div`
  background-image: url(${Wash});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 500px;
  }
`