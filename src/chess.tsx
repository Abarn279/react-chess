import React from 'react';
import './chess.scss';
import { Board } from './ChessGame/Board';

const Chess = () => {
  const [board, setBoard] = React.useState(new Board("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"));

  console.log(board.toString());
  return (
    <div className="board">
      {board.ranks.map((rank: string, rind: number) =>
        board.files.map((file: string, find: number) => {
          let piece = board.pieceAt(file + rank);

          return <div className={`space ${board.isDark(file + rank) ? 'dark' : ''}`} key={file + rank}>
            {piece && (
              <div className="piece">
                <img src={`pieces/${piece.toString()}.png`} />
              </div>
            )}
          </div>
        })
      )}
    </div>
  );
}

export default Chess;
