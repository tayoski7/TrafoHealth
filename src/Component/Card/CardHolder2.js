import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import Tired from '../Images/tired.jpg'
import Yoga from '../Images/yoga.jpg'
export const CardHolder2 = () => {
  return (
    <MainContainer>
        <TopDiv>
            <TopText>Daily Curated Articles For Your Healthcare</TopText>
        </TopDiv>
        <CardContainer>
            <Card 
                Images={Yoga}
                FirstLine='Wellness Jan 24, 2020'
                ThirdLine='Can meditation banish back pain'
                Arrow='Dr. Sanjay Gupta has the latest medical advice on how to use exercise for better sleep'
                fs='300px'
                he='300px'
                fm='90%'
                ml='5%'
            />

            <Card 
                Images={Tired}
                FirstLine='Fitness Jan 25, 2020'
                ThirdLine='The latest on exercise and sleep'
                Arrow='it might seem too good to be true that relief from that naggin gback pain could be found in meditation and yoga'
                fs='300px'
                he='300px'
                fm='90%'
                ml='5%'
            />
        </CardContainer>
    </MainContainer>
  )
}




const CardContainer = styled.div`
   display: flex;
   justify-content: space-around;
   width: 90%;
   flex-direction: row;
   align-items: center;
   margin-bottom:50px;
   @media screen and (max-width: 768px){
      display: flex;
      flex-direction:column;
      margin-top: 10px;
      justify-content: center;
      width:100%;
     
   }
      `

const MainContainer = styled.div`
   width: 90%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   @media screen and (max-width: 875px){
      width:100%;
  }
`
const TopDiv = styled.div`
   width: 70%;
   @media screen and (max-width: 850px){
      width: 60%;
      margin-left: 0px;
   }
  
`
const TopText = styled.h1`
    color: #161F5E;
  font-size: 50px;
  @media screen and (max-width: 850px){
     font-size: 35px;
   
  }

`
