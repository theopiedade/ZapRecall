import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components';
import FlashCards from './FlashCards';
import Logo from './Logo';
import StatusBar from './StatusBar';


export default function App() {
  return (
    <>
    <ContainerPrincipal>

    <Logo/>
      
    <FlashCards/>

    </ContainerPrincipal>
    
    <StatusBar/>

    </>
  );
}


const ContainerPrincipal = styled.div`
  width: 375px;
  height: 667px;
  background-color: #FB6B6B;
`;


const ContainerCards = styled.div` 
  margin-top: 59px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

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




function App2() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


function App3() {
  return (
    <>
      <div class="containerPrincipal">
        <div class="containerLogo"> 
          <img src="../assets/logo.png"/>
          <div class="containerLogoTxt"> ZapRecall </div>
        </div>

        <div class="containerQuestions">
          
          <div class="questionCard">
            <h1>Pergunta 1</h1>
            <img src="../assets/seta_play.png"/>
          </div>

          <div class="questionCardOpen">
            <h1>O que é JSX?</h1>
            <div class="questionCardOpenTurnAround">
              <img src="../assets/seta_virar.png"/>
            </div>
          </div>

          <div class="questionCardOpen">
            <h1>JSX é uma sintaxe para escrever HTML dentro do JS</h1>
            <div class="questionCardOpenButtons">
              <button class="b1">Não lembrei</button>
              <button class="b2">Quase não lembrei</button>
              <button class="b3">Zap</button>
            </div>
          </div>

          <div class="questionCard">
            <h2>Pergunta 4</h2>
            <img src="../assets/icone_quase.png"/>
          </div>

        </div>
  
      
      </div>
      <div class="containerStatus">0/4 CONCLUÍDOS</div>
    </>
  )
}

