
<script lang="ts" setup>
interface Props {
  warning?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  warning: false
})
</script>

<template>
  <p class="text" :class="{ warning: props.warning }">
    <slot />
  </p>
</template>


<style lang="scss" scoped>
.text {
  color: rgba(255, 255, 255, 0.5);
  margin: 10px;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    transform: scale(1.06);
  }
}

@media screen and (min-width: 1400px) {
  .text {
    /* color: $navy-blue; */
  }
}

.warning {

  /* color: $red; */
  &:hover {
    cursor: default;
    transform: scale(1);
  }
}
</style>
