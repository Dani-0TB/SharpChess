<!-- eslint-disable vue/require-v-for-key -->
<template>
<!-- <div id="board" :style="{ backgroundImage: `url(http://localhost:3000/assets/board-blue.png)`}">
>  -->
<div id="board">
</div>
</template>

<script setup lang="ts">

import { Chess } from "@/controllers/Chess";
import { Piece } from "@/controllers/Piece";
import { ref } from 'vue';

const chess = ref(new Chess());
</script>

<style>

#board {
  width: 100%;
  background-color: aliceblue;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  max-width: 600px;
  aspect-ratio: 1 / 1;
  border-radius: 5px;
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
