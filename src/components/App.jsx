// Fichero src/components/App.jsx
import { useState } from "react";
import "../styles/App.scss";
import Board from "./Board";
import Header from "./Header";
import Dice from "./Dice";
import Cupboard from "./Cupboard";

function App() {
  const [groguPosition, setGroguPosition] = useState(1);
  const [goods, setGoods] = useState({
    cookies: 3,
    eggs: 3,
    frogs: 3,
  });

  const [dice, setDice] = useState(0);
  const [status, setStatus] = useState("En curso");

  function RollDice(numberDice) {
    setDice(numberDice);
    if (numberDice === 4) {
      setGroguPosition(groguPosition + 1);
      setStatus("Grogu avanza una casilla");
    } else if (numberDice === 1 && goods.cookies !== 0) {
      setGoods({...goods, cookies: goods.cookies - 1});
      setStatus("Has ayudado a Mando a recoger una galleta");
    } else if (numberDice === 2 && goods.eggs !== 0) {
      setGoods({...goods, eggs: goods.eggs - 1});
      setStatus("Has ayudado a Mando a recoger un huevo");
    } else if (numberDice === 3 && goods.frogs !== 0) {
      setGoods({...goods, frogs: goods.frogs - 1});
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
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </div>
  );
}

export default App;
