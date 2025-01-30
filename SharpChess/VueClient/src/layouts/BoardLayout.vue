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
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 5px;
    flex: 1 1 auto;
  }

  .title {
    margin-bottom: 20px;
  }
</style>