function Dice({ goods, RollDice, isFinish }) {
  function handleClick() {
    const numberDice = getValidRoll();
    RollDice(numberDice);
  }

  function getValidRoll() {
    const options = [];
    if (goods.cookies > 0) options.push(1);
    if (goods.eggs > 0) options.push(2);
    if (goods.frogs > 0) options.push(3);
    options.push(4);
    const idx = Math.floor(Math.random() * options.length);
    return options[idx];
  }

  return (
    <button
      onClick={handleClick}
      className={isFinish ? "dice disabled" : "dice"}
      disabled={isFinish}
    >
      🎲
    </button>
  );
}

export default Dice;
