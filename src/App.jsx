import { useState } from 'react'
import styled from 'styled-components';
import FlashCards from './FlashCards';
import Logo from './Logo';
import StatusBar from './StatusBar';


export default function App() {

  const [count, setcount] = useState(0);

  return (
    <>
    <ContainerPrincipal>

    <Logo/>
      
    <FlashCards count={count} setcount={setcount} />

    </ContainerPrincipal>
    
    <StatusBar count={count} setcount={setcount}/>

    </>
  );
}


const ContainerPrincipal = styled.div`
  width: 375px;
  background-color: #FB6B6B;
`;


