import { Piece } from "./Piece";
import { Color } from "../Color";
import { Board } from "../Board";
import { Move } from "../Move";

export class Rook extends Piece {
    public charReference(): string {
        return "r"
    }

    public getPossibleMoves(board: Board, myPosition: string): Move[] {
        return [];
    }
}