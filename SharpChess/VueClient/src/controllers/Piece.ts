

export abstract class Piece {
  // piece representation
  public static empty: number = 0;
  public static pawn: number = 1;
  public static knight: number = 2;
  public static bishop: number = 4;
  public static rook: number = 8;
  public static queen: number = 16;
  public static king: number = 32;
  // color representation
  public static white: number = 64;
  public static black: number = 128;

  public static decode_number(piece: number): string {
    let piece_str: string = "";

    // get the piece color
    switch(piece & 0b11000000) {
      case Piece.white:
      piece_str = piece_str.concat("w");
      break;
      case Piece.black:
      piece_str = piece_str.concat("b");
      break;
    }

    // get the piece type
    switch(piece & 0b00111111) {
      case Piece.pawn:
      piece_str = piece_str.concat("p");
      break;
      case Piece.knight:
      piece_str = piece_str.concat("n");
      break;
      case Piece.bishop:
      piece_str = piece_str.concat("b");
      break;
      case Piece.rook:
      piece_str = piece_str.concat("r");
      break;
      case Piece.queen:
      piece_str = piece_str.concat("q");
      break;
      case Piece.king:
      piece_str = piece_str.concat("k");
      break;
    }

    return piece_str;
  }
}
