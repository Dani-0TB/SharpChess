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

export class Board {
  squares: number[] = new Array(64);
  start_fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

  append_piece(piece: number): boolean {
    for (let i = 0; i < this.squares.length; i++) {
      if (!this.squares[i]) {
        this.squares[i] = piece;
        return true;
      }
    }
    return false;
  }
}
