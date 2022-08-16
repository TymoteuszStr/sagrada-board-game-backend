<script lang="ts" setup>
import LogoHeader from "@/components/LogoHeader/LogoHeader.vue";
import UsersContainer from "../components/NewRoom/UsersContainer.vue";
</script>

<template>
  <LogoHeader />;
  <h2>The game is about to start!</h2>
  <UsersContainer />
</template>

<style lang="scss" scoped>
@import "@/common/design.scss";
h2 {
  @include gradient-text-vue;
  @include flex-center;
  font-size: 34px;
}
</style>
