import React from 'react';
import './chess.scss';
import { Board } from './ChessGame/Board';
import { Piece } from './ChessGame/Pieces/Piece';
import { Move } from './ChessGame/Move';

const Chess = () => {
  // Board
  const [board, setBoard] = React.useState<Board>(new Board("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"));

  // Selected piece
  const [selected, setSelected] = React.useState<string | null>();

  // Potential moves
  const [potentialMoves, setPotentialMoves] = React.useState<Move[]>();
  const [potentialMoveSquares, setPotentialMoveSquares] = React.useState<string[]>();
  React.useEffect(() => {
    setPotentialMoveSquares(potentialMoves?.map((move: Move) => move.toSpace));
  }, [potentialMoves])

  const onSpaceClick = (file: string, rank: string, piece: Piece | null) => {
    // Player is requesting to make a move
    if (selected && potentialMoveSquares?.includes(file + rank)) {
      board.makeMove(potentialMoves?.find(el => el.toSpace === file + rank)!)
      setBoard(board);
      setSelected(null);
      setPotentialMoves([]);
      return;
    }

    // Player has selected an empty space that's not in their potential moves, this is a no-op.
    if (piece === null) return;

    // Player is selecting a new piece and has not attempted to initiate a move. If a piece on the opposing side is selected, it's also a no-op.
    if (board.getTurn() !== piece.color) return;
    setSelected(file + rank);
    setPotentialMoves(piece.getPossibleMoves(board, file + rank));
  }

  return (
    <div className="board">
      {board.ranks.map((rank: string, rind: number) =>
        board.files.map((file: string, find: number) => {
          let piece: Piece | null = board.pieceAt(file + rank);

          return <div
            className={`space ${board.isDark(file + rank) ? 'dark' : ''} ${potentialMoveSquares?.includes(file + rank) ? 'potential' : ''} ${selected === file + rank ? 'selected' : ''}`}
            key={file + rank}
            onClick={() => { onSpaceClick(file, rank, piece) }}>
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
