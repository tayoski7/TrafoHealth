import React from 'react'
import styled from 'styled-components'
import  BG from '../Images/backgrnd.png'
import Mobile from '../Images/phone.png'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
export const SectionPhone = () => {
  return (
    <MainContainer>
        <MainWrap>
            <LeftWrap>
                <Phone src={Mobile}/> 
            </LeftWrap>
            <RightWrap>
                <Head>A handy way to <br/>get treatment</Head>
                <List>
                  <Num>
                   <Num1>1</Num1> 
                  <Para>Services for your needs</Para>  <IoIosArrowUp/>
                  </Num>
                  <Text>Everybody always have different needs and we<br/>provide options for you and your needs </Text>
                 
                   <NumMiddle>
                   <Num1>2</Num1> 
                  <Para>Choose your doctor</Para>   <IoIosArrowDown/>
                  </NumMiddle>

                  <Num>
                  <Num1>3</Num1> 
                  <Para>Get an appointment</Para>   <IoIosArrowDown/>
                  </Num>
                </List>
            </RightWrap>
        </MainWrap>
    </MainContainer>
  )
}

 const MainContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px){
       width: 100%;  
    }  
 `

 const MainWrap = styled.div`
   background-image: url(${BG});
   width: 100%;
   height: 700px;
   margin-top: 40px;
   display: flex;
   justify-content: space-around;
   @media screen and (max-width: 875px){
     width: 100%;
     height: 600px;
   }
   @media screen and (max-width: 768px){
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 1005px;
    justify-content: center;
    align-items: center;
   }
   @mediascreen and (max-width:425px){
    width:100%;
   }

 ` 
  
 const LeftWrap = styled.div``

 const Phone = styled.img`
   margin-top: 65px;
   @media screen and (max-width: 875px){
      width: 300px;
   }
   @media screen and (max-width: 768px){
      margin: 0 0 60px;
      height: 500px;
    }
 `

 const RightWrap = styled.div`
   color: white;
   margin-top: 60px;
   @media screen and (max-width: 875px){
      // margin: -40px 0 0;
   }
 `
 
 const Head = styled.h1`
   font-size: 50px;
   @media screen and (max-width: 875px){
     font-size: 30px;
   }
   @media screen and (max-width: 768px){
     font-size: 40px;
   }
 `
 
 const List = styled.div`
   
 `

 const Text = styled.p`
  //  padding-left: 30px;
 `

 
 const Para = styled.h2`
   padding: 0 0 0 15px;
  //  margin-right: 40px;
   @media screen and (max-width: 875px){
     font-size: 18px;
   }
 `
  const NumMiddle = styled.div`
    border-top-width:  thin;
    border-top-style: solid;
    border-bottom-style: solid;
    border-bottom-width: thin;
    border-color: rgba(255, 255, 255, 0.2);
    width: 350px;
    display: flex;
    align-items: center;
    // margin: 30px 0 0px;

`

const Num = styled.div`
  display: flex;
  align-items: center;
`

const Num1 = styled.div`
   width: 30px;
   height: 30px;
   border-radius: 50%;
   background-color: #00A962;
   text-align: center;
`


 