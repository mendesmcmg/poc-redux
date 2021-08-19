import { useState } from "react";
import "./App.css";

// Action - objeto descrevendo o que aconteceu e
// dispatch ela pro store (o estado só muda dando
// dispatch nela)

// Reducers - funções puras para especificar como o
// estado é atualizado em resposta a uma ação. Calcula
// um novo estado baseado no antigo e na ação

// O reducer pega o estado atual e uma action descrevendo
// o que aconteceu e retorna um novo valor de estado
// (state, action) => newState

// O estado Redux deve conter apenas objetos JS, arrays e
// primitivos. O valor raiz é geralmente um objeto

function App() {
  // State: a counter value
  const [counter, setCounter] = useState(0);

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // View: the UI definition
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
