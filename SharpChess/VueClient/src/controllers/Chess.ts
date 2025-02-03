/* Chess Game Module
* This module handles the move generation functions
* and gameplay. It manipulates the chess board
* representation, and checks if moves are valid
* it will also store the move history, and handle
* the internal gameplay.
*/

import { Board, Squares } from "./Board";
import { Piece } from "./Piece";

export const START_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

export class Chess {
  private _board = new Board();

  log_board() {
    console.log(this._board.toString());
  }
}


