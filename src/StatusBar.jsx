import { useState } from "react";
import styled from 'styled-components';

export default function StatusBar() {
    return (
        <ContainerStatus>
            0/8 CONCLUÍDOS
        </ContainerStatus>
    );

}


const ContainerStatus = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
  width: 375px;
  height: 70px;
  background: #FFFFFF;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
`;