import React from 'react'
import styled from 'styled-components'
import {AiOutlineArrowRight } from 'react-icons/ai';
import  {
    BsTwitter,
    BsInstagram, 
    BsYoutube
} from 'react-icons/bs';
import {FaFacebookF } from 'react-icons/fa';
export const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrapper>
            <FooterTop>
                <FooterLeft>
                    <ListOne>
                        <Head>Company</Head>
                        <List>Press</List>
                        <List>Our Company</List>
                        <List>Affiliate</List>
                        <List>Carreers</List>
                    </ListOne>
                    <ListTwo>
                        <Head>Help</Head>
                        <List>FAQs</List>
                        <List>Contact Us</List>
                        <List>Pricing</List>
                    </ListTwo>
                    <ListThree>
                        <Head>Legal</Head>
                        <List>Terms of Service</List>
                        <List>Privacy Policy</List>
                        <List>Trafo Health PDA</List>
                    </ListThree>
                </FooterLeft>
                <FooterRight>
                    <RightHead>Keep up with us</RightHead>
                    <RightPara>Stay up to date by reading our high quality articles and personalized for you</RightPara>
                    <InputContainer>
                        <Input placeholder='Enter your Email'/>
                        <InputIcon><AiOutlineArrowRight/></InputIcon>
                    </InputContainer>
                </FooterRight>
            </FooterTop>
            <FooterBottom>
                <Copyright> © 2020 Travo Health. all right reserved</Copyright>
                <FooterIcons>
                    <IconOne><FaFacebookF/></IconOne>
                    <IconTwo><BsTwitter/></IconTwo>
                    <IconThree><BsInstagram/></IconThree>
                    <IconFour><BsYoutube/></IconFour>
                </FooterIcons>
            </FooterBottom>
        </FooterWrapper>
    </FooterContainer>
  )
}

const FooterContainer =styled.div`
    width:100%;
    display:flex;
    justify-content:center;  
`
const FooterWrapper=styled.div`
    width:90%;
    height:400px;
    background-color:#050738;
    display:flex;
    flex-direction:column;
    color:#fdfdfd;
    font-size:18px;
    align-self:flex-start;
    justify-content:center;
    align-items:center;
    @media screen and (max-width: 875px){
        height:650px;
        width:100%;
    }
    @media screen and (max-width: 425px){
        height:600px;
    }
    @media screen and (max-width: 325px){
        height:750px;
    }
`

const FooterTop=styled.div`
    display:flex;
    justify-content:space-between;
    width:90%;
    @media screen and (max-width: 875px){
        display:flex;
        flex-direction:column-reverse;
      }
`

const FooterLeft=styled.div`
    display:flex;
    font-size:25px;
    @media screen and (max-width: 425px){
        font-size:15px;
    }
`

const Head=styled.h4`
    font-weight:normal;
    color:#a3a4b5;
`

const ListOne=styled.ul`

`

const List=styled.li`
    list-style:none;
    font-size:15px;
    line-height:40px;
   
`

const ListTwo=styled.ul`

`

const ListThree=styled.ul`

`

const FooterRight=styled.div`
    width:35%;
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    padding-top:20px;

    @media screen and (max-width: 875px){
        width:100%;
      }
`


const RightHead=styled.div`
font-size:25px;
`

const RightPara=styled.div`

`

const InputContainer=styled.div`
    display:flex;
    justify-content:space-between;
    height:60px;
    border-bottom:1px solid rgba(255,255,255,0.2);
    margin-top:20px;
`

const Input=styled.input`
    border:none;
    height:40px;
    width:70%;
    background:#050738;
    font-size:25px;
    
    
`
const InputIcon=styled.div`
    background-color:#00A962;
    color:white;
    width:30px;
    height:30px;
    border-radius:50%;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:
`

const FooterBottom=styled.div`
    display:flex;
    justify-content:space-between;
    width:90%;

    @media screen and (max-width: 875px){
        display:flex;
        flex-direction:column-reverse;
        justify-self:flex-end;
      }
`

const Copyright=styled.div`
width:40%;
text-align:center;

@media screen and (max-width: 875px){
    width:100%;
    margin-top:15px;
  }

`

const FooterIcons=styled.div`
    display:flex;
    justify-content:space-around;
    width:20%;

    @media screen and (max-width: 875px){
        width:100%;
      }
`


const IconOne=styled.div`
    background-color:white;
    color:#050738;
    width:30px;
    height:30px;
    border-radius:50%;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
`

const IconTwo=styled.div`
    background-color:white;
    color:#050738;
    width:30px;
    height:30px;
    border-radius:50%;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
`

const IconThree=styled.div`
    background-color:white;
    color:#050738;
    width:30px;
    height:30px;
    border-radius:50%;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
`

const IconFour=styled.div`
    background-color:white;
    color:#050738;
    width:30px;
    height:30px;
    border-radius:50%;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
`



