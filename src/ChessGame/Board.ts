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

    constructor(fen: string) {
        const [pieceStr, activeColor, castlingAvail, enPassantTgt, halfmoveClock, fullmoveNumber] = fen.split(' ');

        var rankNames = ["8", "7", "6", "5", "4", "3", "2", "1"];
        var fileNames = ["A", "B", "C", "D", "E", "F", "G", "H"];
        var ranks = pieceStr.split('/');

        for (var rankInd = 0; rankInd < 8; rankInd++) {
            var rankStr = ranks[rankInd];
            var fileInd = 0;
            rankStr.split('').forEach((char: string) => {
                var space = fileNames[fileInd] + rankNames[rankInd];

                // FEN uses numbers for empty spaces. Skip and move on
                if (!!parseInt(char)) {
                    var emptySpaces = parseInt(char);
                    for (var i = 0; i < emptySpaces; i++) {
                        this.spaces[space] = null;
                        fileInd++;
                        var space = fileNames[fileInd] + rankNames[rankInd];
                    }
                    return;
                }

                // Get piece char and color
                var color = char == char.toLowerCase() ? Color.BLACK : Color.WHITE;

                // Set the piece
                var piece: Piece | null;
                switch (char.toLowerCase()) {
                    case 'p':
                        piece = new Pawn(color);
                        break;
                    case 'r':
                        piece = new Rook(color);
                        break;
                    case 'n':
                        piece = new Knight(color);
                        break;
                    case 'b':
                        piece = new Bishop(color);
                        break;
                    case 'q':
                        piece = new Queen(color);
                        break;
                    case 'k':
                        piece = new King(color);
                        break;
                    default:
                        piece = null;
                }

                this.spaces[space] = piece;

                fileInd++;
            });
        }

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