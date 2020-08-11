import "./board.css";
import React from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = React.useState([
    "O",
    null,
    "X",
    "X",
    "X",
    "O",
    "O",
    null,
    null,
  ]);

  const [xIsNext, setxIsNext] = React.useState(true);

  const status = "Next player: X";

  const handleClick = (index) => {
    if (!squares[index]) {
      const squaresCopy = [...squares];
      squaresCopy[index] = xIsNext ? "X" : "O";
      setSquares(squaresCopy);
      setxIsNext(!xIsNext);
      console.log(xIsNext);
    } else {
      alert("no");
    }
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        <Square
          value={squares[0]}
          onClick={function () {
            handleClick(0);
          }}
        />
        <Square
          value={squares[1]}
          onClick={function () {
            handleClick(1);
          }}
        />
        <Square
          value={squares[2]}
          onClick={function () {
            handleClick(2);
          }}
        />
        <Square
          value={squares[3]}
          onClick={function () {
            handleClick(3);
          }}
        />
        <Square
          value={squares[4]}
          onClick={function () {
            handleClick(4);
          }}
        />
        <Square
          value={squares[5]}
          onClick={function () {
            handleClick(5);
          }}
        />
        <Square
          value={squares[6]}
          onClick={function () {
            handleClick(6);
          }}
        />
        <Square
          value={squares[7]}
          onClick={function () {
            handleClick(7);
          }}
        />
        <Square
          value={squares[8]}
          onClick={function () {
            handleClick(8);
          }}
        />
      </div>
    </div>
  );
}
