<script lang="ts" setup>
import BoardMiniature from "./BoardMiniature.vue";
</script>
<template>
   <div class="boards-container">
      <BoardMiniature :nr="0" />
      <BoardMiniature :nr="1" />
      <BoardMiniature :nr="2" />
      <BoardMiniature :nr="3" />
   </div>
   <p>pick your board color</p>
</template>
<style lang="scss" scoped>
@import "@/common/design.scss";

.boards-container {
   @include flex-center;
   margin-top: 30px;
   justify-content: space-around;
   width: 100%;
   max-width: 400px;
   min-width: 300px;
   margin-left: auto;
   margin-right: auto;
}

p {
   @include flex-center;
   margin: 20px;
   color: whitesmoke;
   font-size: 22px;
   letter-spacing: 1px;
}
</style>
