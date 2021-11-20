import { Piece } from "./Piece";
import { Color } from "../Color";
import { Board } from "../Board";
import { Move } from "../Move";

export class King extends Piece {
    public charReference(): string {
        return "k"
    }

    public getPossibleMoves(board: Board, myPosition: string): Move[] {
        return [];
    }
}