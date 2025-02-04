/* Chess Game Module
* This module handles the move generation functions
* and gameplay. It manipulates the chess board
* representation, and checks if moves are valid
* it will also store the move history, and handle
* the internal gameplay.
*/

import { Board, Squares } from "./Board";
import { ColorCode, Piece } from "./Piece";

export const START_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

const WHITE = ColorCode.white;
const BLACK = ColorCode.black;

export class Chess {
  private _board = new Board();
  private _to_move = WHITE;
  private _numberOfHalfmoves = 0;
  private _numberOfMoves = 0;

  log_board() {
    console.log(this._board.toString());
  }

  star_pos() {
    this._board.set_start_pos();
    console.log("Start position set.")
    this.log_board()
  }

  test_move() {

    if (this._board.move_piece(Squares.e2, Squares.e4))
    {
      console.log('moved piece');
    }
    this.log_board()
  }

  switch_to_move() {
    this._to_move = this._to_move === WHITE ? BLACK : WHITE;
  }
}


