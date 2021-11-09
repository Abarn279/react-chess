import { Piece } from "./Piece";
import { Color } from "../Color";

export class Knight extends Piece {
    public getLegalMoves(board: import("../Board").Board, myPosition: string): import("../Move").Move[] {
        throw new Error("Method not implemented.");
    }
    constructor(color: Color) {
        super(color);
    }

    public charReference(): string {
        return "N"
    }
}