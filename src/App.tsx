import React from 'react';
import logo from './logo.svg';
// import './App.css';

import { Title } from "./styles"
import { TitleSmall } from "./styles"

function App() {
  return (
    <div className="App">
      <Title fontSize={20}>
        TypeScript
        <span>Texto menor</span>
      </Title>

      <TitleSmall>Menor</TitleSmall>
    </div>
  );
}

export default App;
