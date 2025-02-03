<template>
  <h1 class="title">
    SharpChess
  </h1>
  <ChessBoard />
</template>

<script setup lang="ts">
  import ChessBoard from '../components/ChessBoard.vue'
</script>

<style>
  #board-layout {
    width: 100%;
    padding: 5px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    overflow: hidden;
  }
</style>
