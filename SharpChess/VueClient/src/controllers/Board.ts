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

import { ColorCode, Piece, TypeCode } from "./Piece";

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
    let s = " |------------------------|\n";
    s += "   a  b  c  d  e  f  g  h ";
    let file = "";

    for (let i = Squares.a1; i <= Squares.h8; i++) {
      // print rank and clear file
      if (i % 8 === 0) {
        file = `${i / 8 + 1}|` + file;
      }
      const piece = this.square[i];
      if (piece) {
        file += ` ${piece.toString(true)} `;
      } else {
        file += " - ";
      }
      if (i % 8 === 7) {
        file += "|\n";
        s = file + s;
        file = "";
      }
    }

    s = " |------------------------|\n" + s;
    return s;
  }

  set_start_pos() {
    for (let i = Squares.a2; i <= Squares.h2; i++) {
      this.square[i] = new Piece(TypeCode.panw, ColorCode.white);
    }
    for (let i = Squares.a7; i <= Squares.h7; i++) {
      this.square[i] = new Piece(TypeCode.panw, ColorCode.black);
    }
    this.square[Squares.a1] = new Piece(TypeCode.rook, ColorCode.white);
    this.square[Squares.b1] = new Piece(TypeCode.knight, ColorCode.white);
    this.square[Squares.c1] = new Piece(TypeCode.bishop, ColorCode.white);
    this.square[Squares.d1] = new Piece(TypeCode.queen, ColorCode.white);
    this.square[Squares.e1] = new Piece(TypeCode.king, ColorCode.white);
    this.square[Squares.f1] = new Piece(TypeCode.bishop, ColorCode.white);
    this.square[Squares.g1] = new Piece(TypeCode.knight, ColorCode.white);
    this.square[Squares.h1] = new Piece(TypeCode.rook, ColorCode.white);

    this.square[Squares.a8] = new Piece(TypeCode.rook, ColorCode.black);
    this.square[Squares.b8] = new Piece(TypeCode.knight, ColorCode.black);
    this.square[Squares.c8] = new Piece(TypeCode.bishop, ColorCode.black);
    this.square[Squares.d8] = new Piece(TypeCode.queen, ColorCode.black);
    this.square[Squares.e8] = new Piece(TypeCode.king, ColorCode.black);
    this.square[Squares.f8] = new Piece(TypeCode.bishop, ColorCode.black);
    this.square[Squares.g8] = new Piece(TypeCode.knight, ColorCode.black);
    this.square[Squares.h8] = new Piece(TypeCode.rook, ColorCode.black);

    this.square[Squares.e2] = undefined;
    this.square[Squares.e4] = new Piece(TypeCode.panw, ColorCode.white);

  }
}
