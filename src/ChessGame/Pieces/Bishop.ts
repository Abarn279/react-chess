import { Piece } from "./Piece";
import { Move } from "../Move";
import { Board } from "../Board";
import { Utilities } from "../Utilities";

export class Bishop extends Piece {
    static bishopMoves = [{ x: 1, y: 1 }, { x: 1, y: -1 }, { x: -1, y: 1 }, { x: -1, y: -1 }];

    public charReference(): string {
        return "b"
    }

    public getPossibleMoves(board: Board, myPosition: string): Move[] {
        var legalMoves: Move[] = [];

        Bishop.bishopMoves.forEach(direction => {
            var currentSpace = myPosition;

            while (true) {
                // Get the next possible space
                var newSpace = Utilities.getSpace(currentSpace, direction);
                if (!board.isSpace(newSpace)) break;

                // Check for piece on this square
                const existingPiece = board.pieceAt(newSpace);

                // No piece? It's legal
                if (!existingPiece) {
                    legalMoves.push(new Move(this, myPosition, newSpace, null, false))
                }

                // My own piece? break. 
                else if (existingPiece.color == this.color) break;

                else if (existingPiece.color != this.color) {
                    legalMoves.push(new Move(this, myPosition, newSpace, existingPiece, false))
                    break;
                }

                currentSpace = newSpace;
            }
        })

        return legalMoves;
    }
}