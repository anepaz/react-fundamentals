import './App.css'
import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basics/Aleatorio";
import Primeiro from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#01 Primeiro Componente">
        <Primeiro></Primeiro>
      </Card>

      <Card titulo="#02 Com Parâmetro">
        <ComParametro
          titulo="Habilidades"
          learning="Atualmente aprendendo React"
          learningLevel={1}
        />
      </Card>

      <Card titulo="#03 Fragmento">
        <Fragmento />
      </Card>

      <Card titulo="#04 Desafio Aleatório">
        <Aleatorio min={1} max={5} />
      </Card>
    </div>
  </div>
);
