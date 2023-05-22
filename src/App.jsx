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


