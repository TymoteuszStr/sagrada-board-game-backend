<script lang="ts" setup>
const { nr } = defineProps<{ nr: number }>();
</script>

<template>
   <div class="board-container" :class="`bg-color-${nr}`">

   </div>
</template>

<style lang="scss" scoped>
@import "@/common/design.scss";

.board-container {
   width: 73px;
   height: 90px;
   border-radius: 1000px 1000px 5px 5px;
   filter: brightness(0.65);

   &:hover {
      @extend .active;
      cursor: pointer;
   }

}

.active {
   filter: brightness(1.0);
   transform: scale(1.05);

}

.bg-color-0 {
   background: $board-color-0;
}

.bg-color-1 {
   background: $board-color-1;
}

.bg-color-2 {
   background: $board-color-2;
}

.bg-color-3 {
   background: $board-color-3;
}
</style>