import { useState } from "react";
import styled from 'styled-components';


export default function StatusBar({count, setcount, history, sethistory, corrects, setcorrects}) {

    console.log("StatusBar acionado");

    if (count < 8) {
        return (
            <ContainerStatus>
                {count}/8 CONCLUÍDOS
                <Historic>
                {history.map((h, i) => ( 
                <img src={h}/>
                ) )}
                </Historic>
            </ContainerStatus>
        );
    }
    else if (count == 8 && corrects == 8) {
         return (
            <ContainerStatus>
                <Finalmsg>
                    <img src="../assets/party.png"/> 
                    <h1>Parabéns! </h1>
                    <h2> Você não esqueceu de nenhum flashcard!</h2>
                </Finalmsg>
                {count}/8 CONCLUÍDOS
                <Historic>
                {history.map((h, i) => ( 
                <img src={h}/>
                ) )}
                </Historic>
            </ContainerStatus>
        );
    }
    else { 
        console.log("Count = "+count+" Corrects="+corrects);
        return (
            <ContainerStatus>
                <Finalmsg>
               
                    <h1><img src="../assets/sad.png"/> Putz! </h1>
                    <h2> Ainda faltam alguns... Mas não desanime!</h2>
                </Finalmsg>
                {count}/8 CONCLUÍDOS
                <Historic>
                {history.map((h, i) => ( 
                <img src={h}/>
                ) )}
                </Historic>
            </ContainerStatus>
        );
    } 
}


const ContainerStatus = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
  width: 375px;
  background: #FFFFFF;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
`;

const Historic = styled.div`
  display: flex; 
  justify-content: center;
  align-items: cen
    img {
    margin-top: 6px;
    margin-right: 5px;
    width: 23px;
    height:23px;
  }
`;

const Finalmsg = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  h1 { 
    margin-top: 15px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    }
   h2 { 
    margin-top: 15px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #333333;
   } 
    img {
    margin-top: 6px;
    margin-right: 5px;
    width: 23px;
    height:23px;
  }
`;
