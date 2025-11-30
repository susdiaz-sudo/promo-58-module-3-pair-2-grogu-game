// Fichero src/components/App.jsx
import { useState, useEffect } from "react";
import "../styles/App.scss";
import Board from "./Board";
import Header from "./Header";
import Dice from "./Dice";
import Cupboard from "./Cupboard";
import Footer from "./Footer";

import { Routes, Route, Router } from "react-router";
import Instructions from "./Instructions";

function App() {
  const [groguPosition, setGroguPosition] = useState(1);
  const [goods, setGoods] = useState({
    cookies: 3,
    eggs: 3,
    frogs: 3,
  });

  const [dice, setDice] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [status, setStatus] = useState("En curso");

 function RollDice(numberDice) {
  if (isFinish) return; // si el juego ya acabó, salimos y no hacemos nada

  setDice(numberDice); // guardamos el valor que ha salido en el dado (para mostrarlo/logs)

  let nextGrogu = groguPosition; // copiamos la posición actual de Grogu para trabajar sobre ella
  let nextGoods = { ...goods };   // copiamos el estado de mercancías para modificarlo sin mutar el original
  let nextStatus = status;        // copiamos el texto de estado por defecto

  if (numberDice === 4) {               // si salió 4:
    nextGrogu += 1;                     //   Grogu avanza una casilla
    nextStatus = "Grogu avanza una casilla"; //   y actualizamos el mensaje
  } else if (numberDice === 1 && nextGoods.cookies > 0) { // si salió 1 y quedan galletas
    nextGoods.cookies -= 1;             //   restamos una galleta
    nextStatus = "Has ayudado a Mando a recoger una galleta";
  } else if (numberDice === 2 && nextGoods.eggs > 0) { // si salió 2 y quedan huevos
    nextGoods.eggs -= 1;                //   restamos un huevo
    nextStatus = "Has ayudado a Mando a recoger un huevo";
  } else if (numberDice === 3 && nextGoods.frogs > 0) { // si salió 3 y quedan ranas
    nextGoods.frogs -= 1;               //   restamos una rana
    nextStatus = "Has ayudado a Mando a recoger una rana";
  }

  setGroguPosition(nextGrogu); // aplicamos la posición calculada de Grogu
  setGoods(nextGoods);         // aplicamos las mercancías calculadas
  setStatus(nextStatus);       // aplicamos el mensaje calculado

  if (nextGrogu >= 7) {        // comprobamos fin: si Grogu llegó o pasó la casilla 7
    setStatus("Has perdido!!!");
    setIsFinish(true);         // marcamos el juego como terminado
  } else if (
    nextGoods.cookies === 0 &&
    nextGoods.eggs === 0 &&
    nextGoods.frogs === 0
  ) {                          // comprobamos fin: si se agotaron todas las mercancías
    setStatus("Has ganado!!!");
    setIsFinish(true);         // marcamos el juego como terminado
  }
}




  const handleReset = () => {
    setGroguPosition(1);
    setGoods({
      cookies: 3,
      eggs: 3,
      frogs: 3,
    });
    setStatus("En curso");
    setIsFinish(false);
  };

  return (
    <div>
      <Header />
      <>
        <Routes>
          <Route path="/Instructions" element={<Instructions />}></Route>
          <Route
            path="/"
            element={
              <main className={`page ${isFinish ? "is-finished" : ""}`}>
                <Board groguPosition={groguPosition} />
                <section className="sectionDice">
                  <Dice goods={goods} RollDice={RollDice} isFinish={isFinish} />
                  <div className="game-status">{status}</div>
                </section>
                <Cupboard type="cookies" amount={goods.cookies}>
                  🍪
                </Cupboard>
                <Cupboard type="eggs" amount={goods.eggs}>
                  🥚
                </Cupboard>
                <Cupboard type="frogs" amount={goods.frogs}>
                  🐸
                </Cupboard>

                <section>
                  <button className="restart-button" onClick={handleReset}>
                    Reiniciar Juego
                  </button>
                </section>
              </main>
            }
          ></Route>
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
