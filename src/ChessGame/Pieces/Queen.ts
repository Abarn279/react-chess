import { Piece } from "./Piece";
import { Color } from "../Color";
import { Board } from "../Board";
import { Move } from "../Move";

export class Queen extends Piece {
    public charReference(): string {
        return "q"
    }

    public getPossibleMoves(board: Board, myPosition: string): Move[] {
        return [];
    }
}