
import { useState } from "react";
import styled from 'styled-components';

export default function Logo ({stage}) {
    return (
        <ContainerLogo>
            <img src="../assets/logo.png" alt="logo"/>
            <h1> ZapRecall </h1>
        </ContainerLogo>
    );
}

const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;

  img { 
    margin-top: 42px;
    width: 52px;
    height: 60px;
    display: flex;
    flex-direction: row;
  }
  h1 {
  margin-top: 42px;
  margin-left: 20px;
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.012em;
  color: #FFFFFF;
  }
`;