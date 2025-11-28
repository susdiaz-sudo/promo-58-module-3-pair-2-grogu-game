// Fichero src/components/App.jsx
import { useState } from "react";
import "../styles/App.scss";
import Board from "./Board";
import Header from "./Header";
import Dice from "./Dice";

import { Routes, Route } from "react-router";

function App() {
  const [groguPosition, setGroguPosition] = useState(1);
  const [cookies, setCookies] = useState(3);
  const [eggs, setEggs] = useState(3);
  const [frogs, setFrogs] = useState(3);
  const [dice, setDice] = useState();
  const [status, setStatus] = useState("En curso");

  function RollDice(numberDice) {
    setDice(numberDice);
    if (numberDice === 4) {
      setGroguPosition(groguPosition + 1);
      setStatus("Grogu avanza una casilla");
    } else if (numberDice === 1 && cookies !== 0) {
      setCookies(cookies - 1);
      setStatus("Has ayudado a Mando a recoger una galleta");
    } else if (numberDice === 2 && eggs !== 0) {
      setEggs(eggs - 1);
      setStatus("Has ayudado a Mando a recoger un huevo");
    } else if (numberDice === 3 && frogs !== 0) {
      setFrogs(frogs - 1);
      setStatus("Has ayudado a Mando a recoger una rana");
    }
  }

  return (
    <div>
      <Header />
      <main className="page">
        <Board groguPosition={groguPosition} />
        <section>
          <Dice RollDice={RollDice} />
          <div className="game-status">{status}</div>
        </section>
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
