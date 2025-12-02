// Fichero src/components/App.jsx
import { useState } from "react";
import "../styles/App.scss";
import Board from "./Board";
import Header from "./Header";
import Dice from "./Dice";
import Footer from "./Footer";
import Form from "./Form";

import { Routes, Route, Router } from "react-router";
import Instructions from "./Instructions";

function App() {
  const [groguPosition, setGroguPosition] = useState(1);
  const [cookies, setCookies] = useState(3);
  const [eggs, setEggs] = useState(3);
  const [frogs, setFrogs] = useState(3);
  const [dice, setDice] = useState();
  const [status, setStatus] = useState("en curso");

  const [name, setName] = useState("");

  function RollDice(numberDice) {
    setDice(numberDice);
    if (dice === 4) {
      setGroguPosition(groguPosition + 1);
      setStatus(name + ", Grogu avanza una casilla");
    } else if (dice === 1 && cookies !== 0) {
      setCookies(cookies - 1);
      setStatus(name + ", has ayudado a Mando a recoger una galleta");
    } else if (dice === 2 && eggs !== 0) {
      setEggs(eggs - 1);
      setStatus(name + ", has ayudado a Mando a recoger un huevo");
    } else if (dice === 3 && frogs !== 0) {
      setFrogs(frogs - 1);
      setStatus(name + ", has ayudado a Mando a recoger una rana");
    }
  }

  function changeName(name) {
    setName(name);
    setStatus(name + ", en curso")
  }

  return (
    <div>
      <Header />
      <Form name={name} changeName={changeName} />
      <Routes>
        <Route path="/Instructions" element={<Instructions />}></Route>
        <Route
          path="/"
          element={
            <main className="page">
              <Board groguPosition={groguPosition} />
              <section className="sectionDice">
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
          }
        ></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
