<script lang="ts" setup>
import UserMiniature from "./UserMiniature.vue";
</script>
<template>
  <div class="users-wrapper">
    <UserMiniature />
    <UserMiniature />
    <UserMiniature />
    <UserMiniature />
  </div>
  <p>invite your folks</p>
</template>
<style lang="scss" scoped>
@import "@/common/design.scss";
.users-wrapper {
  @include flex-center;
  margin-top: 30px;
}
p {
  @include flex-center;
  margin: 20px;
  color: whitesmoke;
  font-size: 22px;
  letter-spacing: 1px;
}
</style>
