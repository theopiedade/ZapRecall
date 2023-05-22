import { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

const cards = [
  { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
  { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
  { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
  { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
  { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
  { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
  { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
  { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

export default function FlashCards() {

  //cardStatus 0 = not answer | 1 = answer almost ok | 2 = answer ok | 3 = answer not ok
  const [cardstatus, setcardstatus] = useState(['0', '0', '0', '0', '0', '0', '0', '0']); 

    return (
        <ContainerCards>
            {cards.map((card, i) => ( <Card num={i} card={card} cardstatus={cardstatus[i]} setcardstatus={setcardstatus} />) )}
        </ContainerCards>
    );
}


const ContainerCards = styled.div` 
  margin-top: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overscroll-behavior-y: auto;
  overflow: auto;

  ::webkit-scrollbar {
    display: none; 
  }
`;
