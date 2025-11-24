function Dice({ RollDice }) {
  function handleClick() {
    const numberDice = getRandomNumber();
    RollDice(numberDice);
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * (5 - 1) + 1);
  }

  return (
    <button onClick={handleClick} className="dice">
      🎲
    </button>
  );
}

export default Dice;
