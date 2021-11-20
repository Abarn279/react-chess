import { Piece } from "./Piece";
import { Color } from "../Color";
import { Board } from "../Board";
import { Move } from "../Move";
import { Utilities } from "../Utilities";

export class Pawn extends Piece {
    public charReference(): string {
        return "p"
    }

    public getPossibleMoves(board: Board, myPosition: string): Move[] {
        var legalMoves: Move[] = [];

        var isFirstMove: boolean = false;;
        if ((this.color == Color.WHITE && myPosition[1] == '2') || (this.color == Color.BLACK && myPosition[1] == '7')) {
            isFirstMove = true;
        }

        var y: number = this.color == Color.WHITE ? 1 : -1;

        var pieceInFront = board.pieceAt(Utilities.getSpace(myPosition, { x: 0, y: y }))
        var pieceTwoInFront = board.pieceAt(Utilities.getSpace(myPosition, { x: 0, y: y * 2 }))

        // Only look for moves forward if there's not a piece in front
        if (!pieceInFront) {

            // Move forward two
            if (isFirstMove && !pieceTwoInFront) {
                legalMoves.push(new Move(this, myPosition, Utilities.getSpace(myPosition, { x: 0, y: y * 2 }), null, false))
            }

            legalMoves.push(new Move(this, myPosition, Utilities.getSpace(myPosition, { x: 0, y: y }), null, false))
        }

        for (let d of [-1, 1]) {
            var piece = board.pieceAt(Utilities.getSpace(myPosition, { x: d, y: y }));

            // If there's an enemy piece...
            if (!!piece && piece.color != this.color) {
                legalMoves.push(new Move(this, myPosition, Utilities.getSpace(myPosition, { x: d, y: y }), piece, false));
            }
        }

        return legalMoves;
    }
}