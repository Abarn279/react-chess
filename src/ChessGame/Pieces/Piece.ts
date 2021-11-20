import { Color } from "../Color";
import { Move } from "../Move";
import { Board } from "../Board";

export abstract class Piece {
    public color: Color;

    constructor(color: Color) {
        this.color = color;
    }

    public abstract charReference(): string;

    public abstract getPossibleMoves(board: Board, myPosition: string): Move[];

    public toString(): string {
        return (this.color === Color.WHITE ? 'w' : 'b') + this.charReference();
    }
}