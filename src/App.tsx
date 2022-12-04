import React from 'react';
import logo from './logo.svg';
// import './App.css';

import { Title } from "./styles"
import { TitleSmall } from "./styles"
import { Paragraph } from "./styles"
import { Botao } from "./styles"
import { Botao1 } from "./styles"
import { Botao2 } from "./styles"
// import { Botao3 } from "./styles"
import { Botao4 } from "./styles"
// import { Botao5 } from "./styles"
import { Botao6 } from "./styles"


function App() {
  return (
    <div className="App">
      <Title fontSize={20}>
        TypeScript
        <span>Texto menor</span>
      </Title>

      <TitleSmall>Menor</TitleSmall>
      <div className="content">
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At culpa accusantium explicabo nobis voluptate sit!
        </Paragraph>
        {/* <Botao>Botão Base</Botao> */}
        <Botao1>Botão 1 Estilizado</Botao1>
        <Botao2>Botão 2 Estilizado</Botao2>
        {/* <Botao3>Botão 31 Estilizado</Botao3> */}
        <Botao4>Botão 4 Estilizado</Botao4>
        {/* <Botao5>Botão 5 Estilizado</Botao5> */}
        <Botao6>Botão 6 Estilizado</Botao6>

      </div>
    </div>
  );
}

export default App;
