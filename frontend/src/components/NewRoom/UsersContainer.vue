<script lang="ts" setup>
import UserMiniature from "./UserMiniature.vue";
</script>
<template>
  <div class="users-container">
    <UserMiniature />
    <UserMiniature />
    <UserMiniature />
    <UserMiniature />
  </div>
  <p>invite your folks</p>
</template>
<style lang="scss" scoped>
@import "@/common/design.scss";

.users-container {
  @include flex-center;
  justify-content: space-around;
  margin-top: 30px;
  width: 100%;
  max-width: 300px;
  min-width: 280px;
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
