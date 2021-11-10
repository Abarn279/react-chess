import { Piece } from "./Piece";
import { Color } from "../Color";
import { Board } from "../Board";
import { Move } from "../Move";

export class Pawn extends Piece {
    public charReference(): string {
        return "P"
    }

    public getLegalMoves(board: Board, myPosition: string): Move[] {
        return [];
    }
}