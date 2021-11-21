import { Rook } from "./Pieces/Rook";
import { Color } from "./Color";
import { Piece } from "./Pieces/Piece";
import { Knight } from "./Pieces/Knight";
import { Bishop } from "./Pieces/Bishop";
import { Queen } from "./Pieces/Queen";
import { King } from "./Pieces/King";
import { Pawn } from "./Pieces/Pawn";
import { Move } from "./Move";

export class Board {
    public ranks: string[] = ["8", "7", "6", "5", "4", "3", "2", "1"];
    public files: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];

    private spaces: { [index: string]: Piece | null } = {}

    private toMove: Color = Color.WHITE;

    constructor(fen: string) {
        this.loadFen(fen);
    }

    public makeMove(move: Move): void {
        this.spaces[move.fromSpace] = null;
        this.spaces[move.toSpace] = move.piece;
        this.toMove = this.toMove === Color.WHITE ? Color.BLACK : Color.WHITE;
    }

    public pieceAt(space: string): Piece | null {
        return this.spaces[space];
    }

    public isSpace(space: string): boolean {
        return Object.keys(this.spaces).includes(space);
    }

    public isDark(space: string): boolean {
        let isoddfile = this.files.indexOf(space[0]) % 2 === 0;
        let isevenrank = parseInt(space[1]) % 2 === 0;
        return !!(+isoddfile ^ +isevenrank);
    }

    public getTurn(): Color { return this.toMove; }

    public toString(): string {
        var s = "";
        this.ranks.forEach(rank => {
            this.files.forEach(file => {
                var piece = this.spaces[file + rank];
                s += `${piece ? piece.toString() : '..'} `
            })
            s += '\n'
        })
        return s;
    }

    private loadFen(fen: string): void {
        const [pieceStr, activeColor, castlingAvail, enPassantTgt, halfmoveClock, fullmoveNumber] = fen.split(' ');

        this.toMove = activeColor === 'w' ? Color.WHITE : Color.BLACK;

        var ranks = pieceStr.split('/');

        for (var rankInd = 0; rankInd < 8; rankInd++) {
            var rankStr = ranks[rankInd];
            var fileInd = 0;
            rankStr.split('').forEach((char: string) => {
                var space = this.files[fileInd] + this.ranks[rankInd];

                // FEN uses numbers for empty spaces. Skip and move on
                if (!!parseInt(char)) {
                    var emptySpaces = parseInt(char);
                    for (var i = 0; i < emptySpaces; i++) {
                        this.spaces[space] = null;
                        fileInd++;
                        var space = this.files[fileInd] + this.ranks[rankInd];
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
    }
}