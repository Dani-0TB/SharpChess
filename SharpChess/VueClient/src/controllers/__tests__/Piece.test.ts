import { expect, test } from 'vitest';
import { ColorCode, Piece, TypeCode } from '../Piece';
import { describe } from 'vitest';


describe('Piece.toString() decoding', () => {
  test('Decodes white pawn', () => {
    const piece = new Piece(TypeCode.panw, ColorCode.white);
    expect(piece.toString()).toBe("wp")
  });
  test('Decodes white knight', () => {
    const piece = new Piece(TypeCode.knight, ColorCode.white);
    expect(piece.toString()).toBe("wn")
  });
  test('Decodes white bishop', () => {
    const piece = new Piece(TypeCode.bishop, ColorCode.white);
    expect(piece.toString()).toBe("wb")
  });
  test('Decodes white rook', () => {
    const piece = new Piece(TypeCode.rook, ColorCode.white);
    expect(piece.toString()).toBe("wr")
  });
  test('Decodes white queen', () => {
    const piece = new Piece(TypeCode.queen, ColorCode.white);
    expect(piece.toString()).toBe("wq")
  });
  test('Decodes white king', () => {
    const piece = new Piece(TypeCode.king, ColorCode.white);
    expect(piece.toString()).toBe("wk")
  });

  test('Decodes black pawn', () => {
    const piece = new Piece(TypeCode.panw, ColorCode.black);
    expect(piece.toString()).toBe("bp")
  });
  test('Decodes black knight', () => {
    const piece = new Piece(TypeCode.knight, ColorCode.black);
    expect(piece.toString()).toBe("bn")
  });
  test('Decodes black bishop', () => {
    const piece = new Piece(TypeCode.bishop, ColorCode.black);
    expect(piece.toString()).toBe("bb")
  });
  test('Decodes black rook', () => {
    const piece = new Piece(TypeCode.rook, ColorCode.black);
    expect(piece.toString()).toBe("br")
  });
  test('Decodes black queen', () => {
    const piece = new Piece(TypeCode.queen, ColorCode.black);
    expect(piece.toString()).toBe("bq")
  });
  test('Decodes black king', () => {
    const piece = new Piece(TypeCode.king, ColorCode.black);
    expect(piece.toString()).toBe("bk")
  });
});

describe('Piece.toString(true) decoding', () => {
  test('Decodes white pawn', () => {
    const piece = new Piece(TypeCode.panw, ColorCode.white);
    expect(piece.toString(true)).toBe("P")
  });
  test('Decodes white knight', () => {
    const piece = new Piece(TypeCode.knight, ColorCode.white);
    expect(piece.toString(true)).toBe("N")
  });
  test('Decodes white bishop', () => {
    const piece = new Piece(TypeCode.bishop, ColorCode.white);
    expect(piece.toString(true)).toBe("B")
  });
  test('Decodes white rook', () => {
    const piece = new Piece(TypeCode.rook, ColorCode.white);
    expect(piece.toString(true)).toBe("R")
  });
  test('Decodes white queen', () => {
    const piece = new Piece(TypeCode.queen, ColorCode.white);
    expect(piece.toString(true)).toBe("Q")
  });
  test('Decodes white king', () => {
    const piece = new Piece(TypeCode.king, ColorCode.white);
    expect(piece.toString(true)).toBe("K")
  });

test('Decodes black pawn', () => {
    const piece = new Piece(TypeCode.panw, ColorCode.black);
    expect(piece.toString(true)).toBe("p")
  });
  test('Decodes black knight', () => {
    const piece = new Piece(TypeCode.knight, ColorCode.black);
    expect(piece.toString(true)).toBe("n")
  });
  test('Decodes black bishop', () => {
    const piece = new Piece(TypeCode.bishop, ColorCode.black);
    expect(piece.toString(true)).toBe("b")
  });
  test('Decodes black rook', () => {
    const piece = new Piece(TypeCode.rook, ColorCode.black);
    expect(piece.toString(true)).toBe("r")
  });
  test('Decodes black queen', () => {
    const piece = new Piece(TypeCode.queen, ColorCode.black);
    expect(piece.toString(true)).toBe("q")
  });
  test('Decodes black king', () => {
    const piece = new Piece(TypeCode.king, ColorCode.black);
    expect(piece.toString(true)).toBe("k")
  });
});
