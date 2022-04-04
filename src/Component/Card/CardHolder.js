import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import File from '../Images/file.png'
import Door from '../Images/door.png'
import Chat from '../Images/chat.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';


export const CardHolder = () => {
  return (
      <MainContain>
         <TopCard>
          <TextTop>Changing the way<br/>you manage your<br/>health care</TextTop> 
        
        </TopCard>  
        
        
    <CardContain>
      <Card
         Arrow='Learn more'
         Images={Chat}
         FirstLine='Online consultation'
         SecondLine='with your doctor'
         Icon={<BsFillArrowRightCircleFill/>}
         
      />

      <Card
         Arrow='Learn more'
         Images={Door}
         FirstLine='Medicine on your'
         SecondLine='front door'
         Icon={<BsFillArrowRightCircleFill/>}
         
      />
      
      <Card 
         Arrow='Learn more'
         Images={File}
         FirstLine='Digital medical'
         SecondLine='records'
         Icon={<BsFillArrowRightCircleFill/>}
         
      
      />
    </CardContain>

    </MainContain>
  )
}

const MainContain = styled.div`
   width:90%;
   margin-left:5%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   @media screen and (max-width:875px) {
      width:100%;
      margin-left:0%;
   }
`
const CardContain = styled.div`
   display: flex;
   justify-content: space-around;
   width: 70%;
   margin-left:-15%;
   @media screen and (max-width:875px){
      margin-left:0%;
   }
   @media screen and (max-width:426px) {
      display:flex;
      flex-direction:column;
      width:50%;
      margin:0px;
      justify-self:center;
      align-self:center;  
   }
`
const TopCard = styled.div`
   width: 90%;
   @media screen and (max-width: 875px){
      width: 100%;
   }
  
`

const TextTop = styled.h1`
   color: #161F5E;
   font-size: 50px;
   width:90%;
   margin-left:10%;
   @media screen and (max-width: 850px){
     font-size: 35px;
      width:90%;
      margin-left:5%;
   }

`



