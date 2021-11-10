import React from 'react';
import './chess.scss';
import { Board } from './ChessGame/Board';

const Chess = () => {
  const [board, setBoard] = React.useState(new Board("8/8/8/8/8/8/8/2B5 w - - 0 1"));

  console.log(board.toString());

  return (
    <p>{board.toString()}</p>
  );
}

export default Chess;
