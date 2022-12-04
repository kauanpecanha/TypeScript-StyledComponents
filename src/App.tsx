import React from 'react';
import logo from './logo.svg';
// import './App.css';

import { Title } from "./styles"
import { TitleSmall } from "./styles"
import { Paragraph } from "./styles"

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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat eveniet veniam quis id sapiente, quod voluptate cupiditate laudantium, voluptatem minima cumque cum ullam ducimus facere distinctio voluptas, reiciendis voluptatibus vero dolorum numquam deserunt illum placeat excepturi! Nostrum praesentium cupiditate pariatur ex delectus et qui doloremque animi neque necessitatibus ut dicta totam sequi, aut consequatur vel fugiat consequuntur ullam nulla laborum adipisci nemo vero minima reiciendis. Inventore quae consequuntur nihil explicabo non consequatur vero ipsum sunt culpa ipsam. Dolor, quis consequatur?
        </Paragraph>
      </div>
    </div>
  );
}

export default App;
