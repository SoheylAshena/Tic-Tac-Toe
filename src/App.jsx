import { useState } from "react";
import Board from "./Board";

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li
        className="m-1 w-44 rounded-md border-[1px] border-white p-2 text-center"
        key={move}
      >
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div className="fixed top-0 -z-10 h-screen w-full bg-gradient-to-tr from-black to-blue-950"></div>
      <div className="text-white">
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="right-0 flex items-center justify-center md:absolute md:top-0 md:m-12">
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}
