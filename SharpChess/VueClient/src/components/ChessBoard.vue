<!-- eslint-disable vue/require-v-for-key -->
<template>

<div class="buttons">
  <button @click="board.append_piece(Piece.white | Piece.pawn)">
    add white pawn
  </button>
  <button @click="board.append_piece(Piece.black | Piece.pawn)">
    Add black pawn
  </button>
</div>

<div id="board" :style="{ backgroundImage: `url(http://localhost:3000/assets/board-blue.png)`}">
  <template v-for="piece in board.squares">
    <div class="piece" :class="Piece.decode_number(piece)">
    </div>
  </template>
</div>

</template>

<script setup lang="ts">

import { Board } from '@/controllers/Board';
import { Piece } from '@/controllers/Piece';
import { ref } from 'vue';

const board = ref(new Board());
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
  display: flex;
  flex-flow: row wrap;
}

.piece {
  width: 70px;
  aspect-ratio: 1;
  background-repeat: no-repeat;
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
