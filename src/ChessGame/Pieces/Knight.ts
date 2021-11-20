import { Piece } from "./Piece";
import { Color } from "../Color";
import { Move } from "../Move";
import { Board } from "../Board";

export class Knight extends Piece {
    public charReference(): string {
        return "N"
    }

    public getPossibleMoves(board: Board, myPosition: string): Move[] {
        return [];
    }
}