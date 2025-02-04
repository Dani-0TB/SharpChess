export enum TypeCode {
  empty = 0,
  panw = 1,
  knight = 2,
  bishop = 4,
  rook = 8,
  queen = 16,
  king = 32
}

export enum ColorCode{
  empty = 0,
  white = 64,
  black = 128
}

export class Piece {
  // piece representation
  code: number;

  constructor (type: TypeCode, color: ColorCode) {
    this.code = type | color;
  }

  toString(log: boolean = false) {
    if (log) {
      const s = this.get_color() === "w" ?
                this.get_symbol().toUpperCase() :
                this.get_symbol();
      return s;
    }
    return `${this.get_color()}${this.get_symbol()}`;
  }

  get_symbol() {
    switch (this.code & 0b00111111) {
      case TypeCode.panw:
        return "p";
      case TypeCode.knight:
        return "n";
      case TypeCode.bishop:
        return "b";
      case TypeCode.rook:
        return "r";
      case TypeCode.queen:
        return "q";
      case TypeCode.king:
        return "k";
      default:
        return "";
    }
  }

  get_color() {
    switch (this.code & 0b11000000) {
      case ColorCode.white:
        return "w";
      case ColorCode.black:
        return "b";
    }
  }

}
