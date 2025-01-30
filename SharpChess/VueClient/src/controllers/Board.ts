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

class Board {
    squares = Array<number>(65);
    start_fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
}


enum Piece {
    // piece representation
    empty = 0,
    pawn = 1,
    knight = 2,
    bishop = 4,
    rook = 8,
    queen = 16,
    king = 32,
    // color representation
    white = 64,
    black = 128
}

export { Piece, Board };