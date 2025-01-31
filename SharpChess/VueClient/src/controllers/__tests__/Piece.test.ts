import { expect, test } from 'vitest';
import { Piece } from '../Piece';
import { describe } from 'vitest';


describe('decode_piece tests', () => {
  test('Decodes white pieces', () => {
    expect(Piece.decode_number(Piece.white| Piece.pawn)).toBe("wp");
    expect(Piece.decode_number(Piece.white| Piece.knight)).toBe("wn");
    expect(Piece.decode_number(Piece.white| Piece.bishop)).toBe("wb");
    expect(Piece.decode_number(Piece.white| Piece.rook)).toBe("wr");
    expect(Piece.decode_number(Piece.white| Piece.queen)).toBe("wq");
    expect(Piece.decode_number(Piece.white| Piece.king)).toBe("wk");
  });

  test('Decodes black pieces', () => {
    expect(Piece.decode_number(Piece.black | Piece.pawn)).toBe("bp");
    expect(Piece.decode_number(Piece.black | Piece.knight)).toBe("bn");
    expect(Piece.decode_number(Piece.black | Piece.bishop)).toBe("bb");
    expect(Piece.decode_number(Piece.black | Piece.rook)).toBe("br");
    expect(Piece.decode_number(Piece.black | Piece.queen)).toBe("bq");
    expect(Piece.decode_number(Piece.black | Piece.king)).toBe("bk");
  });

  test('Returns empty string for invalid codes', () => {
    expect(Piece.decode_number(3)).toBe("");
    expect(Piece.decode_number(12)).toBe("");
  })
});
