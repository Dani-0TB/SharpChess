import { expect, test } from 'vitest';
import { ColorCode, Piece, TypeCode } from '../Piece';
import { describe } from 'vitest';
import { beforeEach } from 'vitest';

const pieces = {
  wp: new Piece(TypeCode.pawn, ColorCode.white),
  wn: new Piece(TypeCode.knight, ColorCode.white),
  wb: new Piece(TypeCode.bishop, ColorCode.white),
  wr: new Piece(TypeCode.rook, ColorCode.white),
  wq: new Piece(TypeCode.queen, ColorCode.white),
  wk: new Piece(TypeCode.king, ColorCode.white),
  bp: new Piece(TypeCode.pawn, ColorCode.black),
  bn: new Piece(TypeCode.knight, ColorCode.black),
  bb: new Piece(TypeCode.bishop, ColorCode.black),
  br: new Piece(TypeCode.rook, ColorCode.black),
  bq: new Piece(TypeCode.queen, ColorCode.black),
  bk: new Piece(TypeCode.king, ColorCode.black),
}

describe('Piece.toString()', () => {
  test('Decodes white pieces', () => {
    expect(pieces.wp.toString(),'Is white pawn').toBe("wp")
    expect(pieces.wn.toString(), 'Is white knight').toBe("wn")
    expect(pieces.wb.toString(), 'Is white bishop').toBe("wb")
    expect(pieces.wr.toString(), 'Is white rook').toBe("wr")
    expect(pieces.wq.toString(), 'Is white queen').toBe("wq")
    expect(pieces.wk.toString(), 'Is white king').toBe("wk")
  });

  test('Decodes black pieces', () => {
    expect(pieces.bp.toString(),'Is black pawn').toBe("bp")
    expect(pieces.bn.toString(), 'Is black knight').toBe("bn")
    expect(pieces.bb.toString(), 'Is black bishop').toBe("bb")
    expect(pieces.br.toString(), 'Is black rook').toBe("br")
    expect(pieces.bq.toString(), 'Is black queen').toBe("bq")
    expect(pieces.bk.toString(), 'Is black king').toBe("bk")
  });
});

describe('Piece.toString(true)', () => {
  test('Decodes white pieces', () => {
    expect(pieces.wp.toString(true),'Is white pawn').toBe("P")
    expect(pieces.wn.toString(true), 'Is white knight').toBe("N")
    expect(pieces.wb.toString(true), 'Is white bishop').toBe("B")
    expect(pieces.wr.toString(true), 'Is white rook').toBe("R")
    expect(pieces.wq.toString(true), 'Is white queen').toBe("Q")
    expect(pieces.wk.toString(true), 'Is white king').toBe("K")
  });

  test('Decodes black pieces', () => {
    expect(pieces.bp.toString(true),'Is black pawn').toBe("p")
    expect(pieces.bn.toString(true), 'Is black knight').toBe("n")
    expect(pieces.bb.toString(true), 'Is black bishop').toBe("b")
    expect(pieces.br.toString(true), 'Is black rook').toBe("r")
    expect(pieces.bq.toString(true), 'Is black queen').toBe("q")
    expect(pieces.bk.toString(true), 'Is black king').toBe("k")
  });
});

