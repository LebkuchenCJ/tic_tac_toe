import "./board.css";
import React from "react";
import Square from "./Square";
import calculateWinner from "../api/game";

export default function Board() {
  const [squares, setSquares] = React.useState([]);

  const [xIsNext, setxIsNext] = React.useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = xIsNext ? "Next player: X" : "Next player: O";
  }

  const handleClick = (index) => {
    if (!squares[index]) {
      const squaresCopy = [...squares];
      if (calculateWinner(squares) || squares[index]) {
        return;
      }
      squaresCopy[index] = xIsNext ? "X" : "O";
      setSquares(squaresCopy);
      setxIsNext(!xIsNext);
      console.log(xIsNext);
    } else {
      alert("Select an empty field");
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
