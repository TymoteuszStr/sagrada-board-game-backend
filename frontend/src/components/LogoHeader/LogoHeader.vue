<template>
  <div class="container">
    <div class="line"></div>
    <h1>SAGRADA</h1>
    <div class="line"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/common/design.scss";

.container {
  @include flex-center;
  max-width: inherit;
  width: 100%;

  h1 {
    @include gradient-text;
    display: flex;
    color: white;
    font-size: 40px;
    margin: 19px 0px;
    letter-spacing: 3px;
    font-weight: 400;
  }

  .line {
    width: 100%;
    height: 1px;
    flex-grow: 1;
    background: linear-gradient(90deg,
        rgba(3, 4, 5, 0.03),
        rgba(152, 102, 170, 1),
        rgba(107, 159, 208, 0.65));

    &:last-child {
      transform: scaleX(-1);
    }
  }
}
</style>
