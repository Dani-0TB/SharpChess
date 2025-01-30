<!-- eslint-disable vue/require-v-for-key -->
<template>

<div id="board" :style="{ backgroundImage: `url(http://localhost:3000/assets/board-blue.png)`}">
  <template v-for="piece in board.squares">
    <div v-if="piece" 
      class="piece"
      :class="decode_peace(piece)"
    >
    </div>
  </template>
</div>

</template>

<script setup lang="ts">

import { Board, Piece } from '@/controllers/Board';
import { ref } from 'vue';

const board = ref(new Board());

board.value.squares[0] = Piece.black | Piece.bishop;
board.value.squares[1] = Piece.white | Piece.rook;
board.value.squares[6] = Piece.black | Piece.knight;

function decode_peace(piece: number): string {
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

  // get the peace type
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

</script>

<style>

#board {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  max-width: 600px;
  aspect-ratio: 1;
  border-radius: 5px;
}

.piece {
  width: 80px;
  aspect-ratio: 1;
  padding: 10px;
}

.bb {
  background-image: url(http://localhost:3000/assets/pieces/black-bishop.png);
  background-size: contain;
}

.bk {
  background-image: url(http://localhost:3000/assets/pieces/black-king.png);
  background-size: contain;
}

.bn {
  background-image: url(http://localhost:3000/assets/pieces/black-knight.png);
  background-size: contain;
}

.bp {
  background-image: url(http://localhost:3000/assets/pieces/black-pawn.png);
  background-size: contain;
}

.bq {
  background-image: url(http://localhost:3000/assets/pieces/black-queen.png);
  background-size: contain;
}

.br {
  background-image: url(http://localhost:3000/assets/pieces/black-rook.png);
  background-size: contain;
}

.wb {
  background-image: url(http://localhost:3000/assets/pieces/white-bishop.png);
  background-size: contain;
}

.wk {
  background-image: url(http://localhost:3000/assets/pieces/white-king.png);
  background-size: contain;
}

.wn {
  background-image: url(http://localhost:3000/assets/pieces/white-knight.png);
  background-size: contain;
}

.wp {
  background-image: url(http://localhost:3000/assets/pieces/white-pawn.png);
  background-size: contain;
}

.wq {
  background-image: url(http://localhost:3000/assets/pieces/white-queen.png);
  background-size: contain;
}

.wr {
  background-image: url(http://localhost:3000/assets/pieces/white-rook.png);
  background-size: contain;
}
</style>