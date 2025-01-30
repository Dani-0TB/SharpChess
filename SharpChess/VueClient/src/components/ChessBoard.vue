<template>
  <div id="board" :style="{ backgroundImage: `url(http://localhost:3000/assets/board-blue.png)`}">

  </div>
</template>

<script setup lang="ts">

</script>

<style>
  #board {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    min-width: 100px;
    min-height: 100px;
    max-width: 600px;
    max-height: 600px;
    flex: 1 1 auto;
    flex: 1 1 auto;
    aspect-ratio: 1/1;
    background-color: aliceblue;
  }
</style>