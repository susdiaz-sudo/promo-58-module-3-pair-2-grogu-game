import "../styles/Board.scss";
import Grogu from "./Grogu";

function Board({ groguPosition }) {
  const board = new Array(7).fill(null);

  function renderCell() {
    return board.map((cell, index) => {
      let key = index + 1;
      console.log(key, groguPosition);
      
      return <div className="cell" key={key}>{groguPosition === key ? <Grogu/> : ""}</div>;
    });
  }

  return <section className="board">{renderCell()}</section>;
}

export default Board;
