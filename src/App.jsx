import { useState } from 'react'
import styled from 'styled-components';
import FlashCards from './FlashCards';
import Logo from './Logo';
import StatusBar from './StatusBar';


export default function App() {

  const [count, setcount] = useState(0);
  const [history, sethistory] = useState(['']);
  const [corrects, setcorrects] = useState(0);

  return (
    <>
    <ContainerPrincipal>

    <Logo/>
      
    <FlashCards count={count} setcount={setcount} history={history} sethistory={sethistory} corrects={corrects} setcorrects={setcorrects} />

    </ContainerPrincipal>
    
    <StatusBar count={count} setcount={setcount} history={history} sethistory={sethistory} corrects={corrects} setcorrects={setcorrects} />

    </>
  );
}


const ContainerPrincipal = styled.div`
  width: 375px;
  background-color: #FB6B6B;
`;


