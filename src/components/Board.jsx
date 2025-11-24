import "../styles/Board.scss";
import Grogu from "./Grogu";

function Board({ position }) {
  return (
    <section className="board">
      <div className="cell">{position === 1 ? <Grogu /> : ""}</div>
      <div className="cell">{position === 2 ? <Grogu /> : ""}</div>
      <div className="cell">{position === 3 ? <Grogu /> : ""}</div>
      <div className="cell">{position === 4 ? <Grogu /> : ""}</div>
      <div className="cell">{position === 5 ? <Grogu /> : ""}</div>
      <div className="cell">{position === 6 ? <Grogu /> : ""}</div>
      <div className="cell">{position === 7 ? <Grogu /> : ""}</div>
    </section>
  );
}

export default Board;
