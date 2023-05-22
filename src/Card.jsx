import { useState } from "react";
import styled from 'styled-components';


const images = [
    "../assets/logo.png",
    "../assets/seta_play.png",
    "../assets/seta_virar.png",
    "../assets/icone_erro.png",
    "../assets/icone_quase.png",
    "../assets/icone_certo.png"
]

const colors = [
    "#333333",
    "#333333",
    "#333333",
    "#FF3030",
    "#FF922E",
    "#2FBE34"
]


export default function Card({num, card, cardstatus, setcardstatus, setcount, count, sethistory, history, setcorrects, corrects, hello}) {
    const [txt, settxt] = useState('Pergunta '+(num+1));
    const [status, setstatus] = useState(0);
    const [img, setimg] = useState(images[1]);
    const [color, setcolor] = useState(colors[0]);
    
    console.log

  //cardStatus 0 = not answer | 1 - Open Question Card | 2 - Answer Open with buttons | 3 = answer not ok | 4 = answer almost ok | 5 = answer ok
    
    function clickCard (i, s) {
        console.log("Entrou clickCard color="+color);
        if (s == 0) { 
            settxt(card.question);
            setstatus(1);
            setimg(images[2]);
        }
        if (s == 1) { 
            settxt(card.answer);
            setstatus(2);
        }
        if (s > 1) {
            settxt('Pergunta '+(num+1));
            setstatus(s+1);
        }
    }

    function clickButton (i,s,option) {
        if (option == 4 || option == 5) {
            const novoCorrects = corrects+1;
            console.log("Entrou corrects ="+novoCorrects)
            setcorrects(novoCorrects)
        }
        settxt('Pergunta '+(i+1));
        setstatus(option);
        setimg(images[option]);
        setcolor(colors[option]);
        console.log("Entrou clickButton option="+option+" color="+color);
        const novoCount = count+1;
        setcount(novoCount);

        history.includes(images[option]);
        const newArray = [...history];
        newArray.push(images[option]);
        console.log("Adicionando ao history: "+i);
        sethistory(newArray);
     }
    
    if (status == 0) {

        return(
        <FlashCard onClick={() => clickCard(num, status)}>
            <h1> {txt} </h1>
            <img src={img}/>
        </FlashCard>
        );  
    }
    if (status == 1) {

        return(
        <FlashCardOpen>
            <h1> {txt} </h1>
            <FlashCardOpenTurnAround onClick={() => clickCard(num, status)}>
            <img src={img}/>
            </FlashCardOpenTurnAround>

        </FlashCardOpen>
        );
    }
    if (status == 2) {

        return(
            <FlashCardOpen>
            <h1> {txt} </h1>
              <FlashCardOpenButtons>
                <B1 onClick={() => clickButton(num, status, 3)}>Não lembrei</B1>
                <B2 onClick={() => clickButton(num, status, 4)}>Quase não lembrei</B2>
                <B3 onClick={() => clickButton(num, status, 5)}>Zap</B3>
              </FlashCardOpenButtons>
            </FlashCardOpen>
        );
    }

    if (status > 2) {

        return(        
           <FlashCard final={true} cor={color} >
                <h1> {txt} </h1>
                <img src={img}/>
            </FlashCard>
        );  
    }

}

  //cardStatus 0 = not answer | 1 - Open Question Card | 2 - Answer Open with buttons | 3 = answer not ok | 4 = answer almost ok | 5 = answer ok

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
    text-decoration-line: ${ (props) => props.final ? 'line-through' : 'none'};
    color: ${ (props) => props.final ? props.cor : '#333333'};
  }
  img {
    width: 20px;
    height: 23px;
    margin-right: 22px;
  }
`;  

const FlashCardOpen = styled.div` 
  width: 299px;
  height: 131px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 25px;

  h1 {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    display:flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 18px;
    margin-left: 15px;
    margin-right: 10px;
  }
`;

const FlashCardOpenTurnAround = styled.div` 
  display: flex; 
  justify-content: flex-end;
  align-items: center;

  img {
    width: 30px;
    height: 20px;
    margin-right: 15px;
    margin-bottom: 6px;
`;

const FlashCardOpenButtons = styled.div` 
    display: flex; 
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 17px;
    margin-right: 17px;
  
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
`;

const B1 = styled.div` 
    background: #FF3030;
    border-radius: 5px;
    border-color: #FF3030;;
    width: 85.17px;
    height: 37.17px;
    color: #FFFFFF;
`;
  
const B2 = styled.div` 
    background: #FF922E;
    border-radius: 5px;
    border-color: #FF922E;
    width: 85.17px;
    height: 37.17px;
    color: #FFFFFF;
`;
  
const B3 = styled.div` 
    background: #2FBE34;
    border-radius: 5px;
    border-color: #2FBE34;
    width: 85.17px;
    height: 37.17px;
    color: #FFFFFF;
`;

