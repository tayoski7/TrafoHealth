import styled from "styled-components";

export const MainContain = styled.div`
   width: 100%;
    display: flex;
    justify-content: center;
   /* display: flex;
   justify-content: center; 
   align-items: center; */
   /* flex-direction: column; */
`

export const MainWrapper = styled.div`
   width: 90%;
   display: flex;
   justify-content: center; 
   /* flex-direction: column; */
   /* align-items: center; */
   flex-wrap: wrap;
   
`
export const BottomCard = styled.div`
  width: 100%;
 margin: 0 0 0 150px;
 @media screen and (max-width: 875px){
   margin:0 0 0 0px;
 }
  
`

export const Icons  = styled.img`
    width:${({fs})=>fs};
    height:${({he})=>he};
    color: #161F5E;
    font-size:35px;
    background-color:${({bg})=>bg};
    @media screen and (max-width: 875px){
      width:${({fm})=>fm};
      margin-left:${({ml})=>ml};
      
    }  
`

export const Button = styled.div`
  display: flex;
 
`

export const Btn = styled.div`
    color: #161F5E;
`

export const Btn1 = styled.div`
  color: #00A962;
  padding: 3px;
`

export const Text = styled.h4`
    color: #161F5E;
`
export const TextTwo = styled.h4`
    color:#161f5e;
    font-size:35px;
    margin-top:0px;
    margin-bottom:0px;
`