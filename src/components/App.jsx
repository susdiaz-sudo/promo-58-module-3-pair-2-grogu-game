// Fichero src/components/App.jsx
import { useState } from "react";
import "../styles/App.scss";
import Board from "./Board";
import Header from "./Header";

function App() {
  const [position, setPosition] = useState(1);
  const [cookies, setCookies] = useState(3);
  const [eggs, setEggs] = useState(3);
  const [frogs, setFrogs] = useState(3);
  const [dice, setDice] = useState();
  //const [status, setStatus] = useState("En curso");

  function getRandomNumber() {
    return Math.floor(Math.random() * 4);
  }

  function handleRollDice() {
    setDice(getRandomNumber());
    if (dice === 4) {
      setPosition(position + 1);
    } else if (dice === 1) {
      setCookies(cookies - 1);
    } else if (dice === 2) {
      setEggs(eggs - 1);
    } else if (dice === 3) {
      setFrogs(frogs - 1);
    }
  }

  return (
    <div>
     <Header/>
      <main className="page">
        <section>
          <button onClick={handleRollDice} className="dice">
            Lanzar Dado
          </button>
          <div className="game-status">En curso</div>
        </section>

        <Board />

        <section className="goods-container">
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </div>
  );
}

export default App;
