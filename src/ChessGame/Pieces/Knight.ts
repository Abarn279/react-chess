import { Piece } from "./Piece";
import { Move } from "../Move";
import { Board } from "../Board";
import { Utilities } from "../Utilities";

export class Knight extends Piece {
    static knightMoves = [{ x: 2, y: 1 }, { x: 2, y: -1 }, { x: 1, y: 2 }, { x: 1, y: -2 }, { x: -1, y: 2 }, { x: -1, y: -2 }, { x: -2, y: 1 }, { x: -2, y: -1 }];

    public charReference(): string {
        return "n"
    }

    public getPossibleMoves(board: Board, myPosition: string): Move[] {
        var legalMoves: Move[] = [];

        Knight.knightMoves.forEach(direction => {
            var currentSpace = myPosition;

            // IS the new space on the board?
            var newSpace = Utilities.getSpace(currentSpace, direction);
            if (!board.isSpace(newSpace)) return;

            // If there's a piece here and it's mine, skip. 
            var piece = board.pieceAt(newSpace);
            if (piece && piece.color === this.color) return;

            legalMoves.push(new Move(this, myPosition, newSpace, piece));
        })

        return legalMoves;
    }
}