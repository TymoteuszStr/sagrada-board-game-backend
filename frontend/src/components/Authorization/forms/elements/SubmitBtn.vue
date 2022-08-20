<template>
  <button class="button" type="submit">
    <slot />
  </button>
</template>



<style lang="scss" scoped>
.button {
  color: white;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  margin: 90px;
  width: 150px;
  border-radius: 25px;
  /* background-color: $main-color; */
  /* color: $navy-blue; */
  font-weight: 600;
  font-size: 15px;
}
</style>
