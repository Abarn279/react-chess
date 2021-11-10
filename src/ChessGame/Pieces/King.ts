import { Piece } from "./Piece";
import { Color } from "../Color";
import { Board } from "../Board";
import { Move } from "../Move";

export class King extends Piece {
    public charReference(): string {
        return "K"
    }

    public getLegalMoves(board: Board, myPosition: string): Move[] {
        return [];
    }
}