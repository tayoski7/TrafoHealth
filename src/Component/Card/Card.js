import React from 'react';

import {
    MainContain,
    MainWrapper,
    // TopCard,
    BottomCard,
    Icons,
    Text,
    TextTwo,
    // TextTop,
    Btn,
    Button,
    Btn1

} from './Card.Element'

function card(props) {
  return (
   <MainContain>
       <MainWrapper>
        
          <BottomCard>
             <Icons fs={props.fs} he={props.he} bg={props.bg} fm={props.fm} ml={props.ml} src={props.Images}/>
             <Text>{props.FirstLine}<br/>{props.SecondLine}</Text>
             <TextTwo>{props.ThirdLine}</TextTwo>
              <Button>
                    <Btn>{props.Arrow}</Btn>
                    <Btn1>{props.Icon}</Btn1>
             </Button>
          </BottomCard> 
       </MainWrapper>

   </MainContain>
  )
}

export default card;

