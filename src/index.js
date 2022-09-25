import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'

ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro
        titulo="Habilidades"
        learning="Atualmente aprendendo React"
        learningLevel={ 1 } />
    </div>,
    document.querySelector('#root')
)
