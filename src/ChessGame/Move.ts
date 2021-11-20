import { Piece } from "./Pieces/Piece";

export class Move {
    public isCheck: boolean = false; // Set after the fact 

    constructor(public piece: Piece, public fromSpace: string, public toSpace: string, public capturedPiece: Piece | null, public isPromotion: boolean = false) { }
}