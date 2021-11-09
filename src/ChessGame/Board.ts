import { Rook } from "./Pieces/Rook";
import { Color } from "./Color";
import { Piece } from "./Pieces/Piece";
import { Knight } from "./Pieces/Knight";
import { Bishop } from "./Pieces/Bishop";
import { Queen } from "./Pieces/Queen";
import { King } from "./Pieces/King";
import { Pawn } from "./Pieces/Pawn";

export class Board {
    private spaces: { [index: string]: Piece | null } = {}

    constructor() {
        ["A", "B", "C", "D", "E", "F", "G", "H"].forEach(file => {
            ["1", "2", "3", "4", "5", "6", "7", "8"].forEach(rank => {
                var space = file + rank;

                // Do this for all spaces, put it first so i can comment all the stuff below for testing
                this.spaces[space] = null;

                // // Rooks
                // if (["A1", "H1"].includes(space)) {
                //     this.spaces[space] = new Rook(Color.WHITE);
                // }
                // else if (["A8", "H8"].includes(space)) {
                //     this.spaces[space] = new Rook(Color.BLACK);
                // }

                // // Knights
                // else if (["B1", "G1"].includes(space)) {
                //     this.spaces[space] = new Knight(Color.WHITE);
                // }
                // else if (["B8", "G8"].includes(space)) {
                //     this.spaces[space] = new Knight(Color.BLACK);
                // }

                // Bishops
                if (["C1", "F1"].includes(space)) {
                    this.spaces[space] = new Bishop(Color.WHITE);
                }
                else if (["C8", "F8"].includes(space)) {
                    this.spaces[space] = new Bishop(Color.BLACK);
                }

                // // Queens
                // else if (space == "D1") {
                //     this.spaces[space] = new Queen(Color.WHITE);
                // }
                // else if (space == "D8") {
                //     this.spaces[space] = new Queen(Color.BLACK);
                // }

                // // Queens
                // else if (space == "E1") {
                //     this.spaces[space] = new King(Color.WHITE);
                // }
                // else if (space == "E8") {
                //     this.spaces[space] = new King(Color.BLACK);
                // }

                // // Pawns
                // else if (rank == "2") {
                //     this.spaces[space] = new Pawn(Color.WHITE);
                // }
                // else if (rank == "7") {
                //     this.spaces[space] = new Pawn(Color.BLACK);
                // }
            })
        })

        Object.keys(this.spaces).forEach((space: string) => {
            if (this.spaces[space] != null) {
                console.log(this.spaces[space])
                console.log(this.spaces[space]?.getLegalMoves(this, space))
            }
        })
    }

    public pieceAt(space: string): Piece | null {
        return this.spaces[space];
    }

    public isSpace(space: string): boolean {
        var keys = Object.keys(this.spaces);
        debugger;
        return Object.keys(this.spaces).includes(space);
    }

    public toString(): string {
        var s = "";
        ["8", "7", "6", "5", "4", "3", "2", "1"].forEach(rank => {
            ["A", "B", "C", "D", "E", "F", "G", "H"].forEach(file => {
                var piece = this.spaces[file + rank];
                s += `${piece ? piece.toString() : '..'} `
            })
            s += '\n'
        })
        return s;
    }
}