import { useState } from 'react'
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
  background-color: #FB6B6B;
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

