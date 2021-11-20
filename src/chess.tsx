import React from 'react';
import './chess.scss';
import { Board } from './ChessGame/Board';

const Chess = () => {
  const [board, setBoard] = React.useState(new Board("8/8/8/8/8/8/PPPPPPPP/2B5 w - - 0 1"));

  console.log(board.toString());
  return (
    <div className="board">
      {board.ranks.map((rank: string, rind: number) =>
        board.files.map((file: string, find: number) =>
          <div className="space" key={file + rank}>{file + rank}</div>
        )
      )}
    </div>
  );
}

export default Chess;
