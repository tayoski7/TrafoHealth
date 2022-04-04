import React from 'react'
import styled from 'styled-components'
import Student from '../Images/Guy.jpg'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';



export const SectionHealth = () => {
  return (
    <MainContain>
       <MainWrapper>
           <LeftWrapper>
               <TopWrapper>
                 <Head>Your health is<br/>our number one<br/>highest priority</Head>
                 <Para1>Everyone desreve a better treatment for their health care,<br/>including you and that is our main priority</Para1>
                </TopWrapper>
                <BottomWrapper>
                    <Text>
                   <Para2>
                       Nam libero tempore, cum soluta nobis est eligendi optio<br/>
                       cumque nihil impedit quo minus id quod maxime placeat<br/>
                       facere possimus, omnis voluptas assumenda est
                    </Para2>
                    <Para2a>Thomas Frank Anthony</Para2a>
                    <Para2b>Founder of Yogasm</Para2b>
                    </Text>

                       <ParaMore>
                           <Para3>See more stories</Para3>
                           <ParaArrow><BsFillArrowRightCircleFill/></ParaArrow>
                        </ParaMore>
                </BottomWrapper>
           </LeftWrapper>
           <RightWrapper></RightWrapper>
       </MainWrapper>
    </MainContain>
  )
}

const MainContain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
`

const MainWrapper = styled.div`
  width: 90%;
  margin-top: 30px;
  // margin-left: 140px;
  display: flex;
  @media screen and (max-width: 875px){
         width:100%;
         display: flex;
         flex-direction: column;
         height: 850px;
        //  margin-left: 30px;
    }
`

const LeftWrapper = styled.div`
  width: 50%;
  @media screen and (max-width:875px){
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
  }
`

const RightWrapper = styled.div`
   background-image: url(${Student});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   width: 50%;
   margin-top: 5px; 
   margin-bottom: 30px;
   @media screen and (max-width: 875px){
    width: 90%;
    height: 500px;
    margin-bottom: 20px;
    margin-left: 5%;
  }
  @media screen and (max-width: 426px){
    width: 90%;
    height: 500px;
    margin-bottom: 20px;
    margin-left: 5%;
  }
`
const TopWrapper = styled.div`
    @media screen and (max-width:426px){
      width:90%;
    }
`

const Head = styled.h1`
  color: #16195E;
  font-size: 50px;
  @media screen and (max-width: 850px){
      font-size: 30px;
   }
`

const Para1 = styled.h4`
   color: #16195E;
   
`

const BottomWrapper = styled.div``

const Text = styled.div`
background: #F2FAF7;
border-left: 5px solid #00A962;
height: 180px;
 width: 90%;
 @media screen and (max-width: 875px){
      width: 100%;
   }
 @media screen and (max-width: 426px){
   width: 90%;
   margin-left:5%;
  height:215px;
 }

`

const Para2 = styled.h4`
  font-weight: normal;
`
 
const Para2a = styled.h4``

const Para2b = styled.p`
   font-size: 12px;
`

const Para3 = styled.h4`
   color: #16195E;
   /* text-align: center; */
   padding: 0 5px 5px;
`
const ParaArrow = styled.div`
  color: #00A962;
  text-align: center;
`

const ParaMore = styled.div`
  display: flex;
  align-items: center; 
`