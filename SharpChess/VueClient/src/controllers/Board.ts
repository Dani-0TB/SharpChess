/* Board and Piece representation *
* This module contains the Piece and Board
* representation. It's using a board centric
* representation of the board state, with an
* array of board positions, including an extra
* position to handle off the board moves using it.
*
* It's main porpouse is to handle the logic
* for board representation. Loading positions
* from a FEN string or PGN file.
*/

import { Piece } from "./Piece";

export enum Squares {
  a1, b1, c1, d1, e1, f1, g1, h1,
  a2, b2, c2, d2, e2, f2, g2, h2,
  a3, b3, c3, d3, e3, f3, g3, h3,
  a4, b4, c4, d4, e4, f4, g4, h4,
  a5, b5, c5, d5, e5, f5, g5, h5,
  a6, b6, c6, d6, e6, f6, g6, h6,
  a7, b7, c7, d7, e7, f7, g7, h7,
  a8, b8, c8, d8, e8, f8, g8, h8,
  empty
}

export class Board {
  square: Array<Piece>;

  constructor() {
    this.square = new Array<Piece>(64);
  }

  add_piece(piece: Piece, square: Squares) {
    this.square[square] = piece;
  }

  toString() {
    let s = "";
    for (let i = Squares.a1; i <= Squares.h8; i++) {
      const piece = this.square[i]
      if (i % 8 == 0)
      {
        s += "\n";
      }
      if (piece) {
        s += piece.toString(true);
      } else {
        s += " _ "
      }
    }
    return s;
  }
}
