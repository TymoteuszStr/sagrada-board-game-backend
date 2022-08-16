<template>
  <button type="button"><slot /></button>
</template>

<style lang="scss" scoped>
@import "@/common/design.scss";

button {
  @include flex-center;
  width: 240px;
  height: 35px;
  background: radial-gradient(
    276.92% 276.92% at 50% -38.46%,
    #9296a0 0%,
    rgba(146, 150, 160, 0.523072) 54.26%,
    rgba(146, 150, 160, 0) 100%
  );
  border-radius: 3px;
  color: #1b202c;
  font-size: 18px;
  outline: none;
  border: none;
}
</style>
