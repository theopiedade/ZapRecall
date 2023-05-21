import { useState } from "react";
import styled from 'styled-components';

export default function Card({indice}) {
    return(
       <FlashCard key={indice}>
       <h1> Pergunta {indice} </h1>
        <img src="../assets/seta_play.png"/>
       </FlashCard> 

    );
}


const FlashCard = styled.div` 
  margin-bottom: 25px;
  width: 300px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:#FFFFFF;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  h1 {
    margin-left: 15px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }

  h2 {
    margin-left: 15px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: line-through;
    color: #FF922E;
  }

  h3 {
    margin-left: 15px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: line-through;
    color: #2FBE34;
  }

  h4 {
    margin-left: 15px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: line-through;
    color: #FF3030;
  }
  img {
    width: 20px;
    height: 23px;
    margin-right: 22px;
  }
`;  

