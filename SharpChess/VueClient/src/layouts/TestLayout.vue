<template>
  <h1 class="title">Testing</h1>
  <button @click="chess.log_board()">Print Board</button>
  <button @click="chess.star_pos()">Start Position</button>
  <button @click="chess.test_move()">Test Moving Pieces</button>
</template>

<script setup>

import { Chess } from '@/controllers/Chess';
import { ref } from 'vue';

const chess = ref(new Chess());

</script>
