<template>
  <div class="wrapper">
    <h2>Join the game!</h2>
    <div class="rooms-container">
      <p>Sorry... there is no rooms at the moment</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/common/design.scss";
.wrapper {
  margin-top: 45px;

  h2 {
    @include gradient-text-vue;
    letter-spacing: 1px;
    font-weight: 400;
    font-size: 26px;
  }
  p {
    color: rgba(255, 255, 255, 0.7);
    margin: 30px 0;
  }
}
</style>
