import React from "react";

import Primeiro from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";

export default () => (
  <div id="app">
    <Aleatorio min={1} max={5} />
    <h1>Fundamentos React</h1>
    <Fragmento />
    <ComParametro
      titulo="Habilidades"
      learning="Atualmente aprendendo React"
      learningLevel={1}
    />
    <Primeiro></Primeiro>
  </div>
);
