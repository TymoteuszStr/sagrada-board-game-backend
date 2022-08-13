<template>
  <router-view />
</template>

<style lang="scss">
@import "@/common/design.scss";

*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  touch-action: pan-x pan-y;
}
body {
  overscroll-behavior: contain;
  background-color: $bg-color;
  touch-action: pan-x pan-y;
}

@media screen and (min-width: 767px) {
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb,
  ::-webkit-scrollbar-thumb:horizontal {
    background: #707070;
    border-radius: 3px;
    border: 2px solid transparent;
    background-clip: padding-box; // <== make the border work
  }

  ::-webkit-scrollbar-thumb:hover {
    border: 0;
  }
}
</style>
