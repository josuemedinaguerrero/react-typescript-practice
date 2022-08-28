
import './App.css';

import Counter from './components/Counter';
import Usuario from './components/Usuario';

import TimerPadre from './components/TimerPadre';

import ContadorRed from './components/ContadorRed';

import Formulario from './components/Formulario';

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <h2>UseState</h2>
      <Usuario />
      <Counter />
      <br /><hr />
      <h2>UseEffect - UseRef</h2>
      <TimerPadre />
      <br /><hr />
      <h2>UseReducer</h2>
      <ContadorRed />
      <br /><hr />
      <h2>CustomHooks</h2>
      <Formulario />
    </>
  )
}

export default App;

