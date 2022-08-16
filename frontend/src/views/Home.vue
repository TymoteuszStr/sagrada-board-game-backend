<template setup>
  <div class="home-wrapper">
    <LogoHeader />
    <CreateRoom />
    <ListOfRooms />
  </div>
</template>

<script lang="ts" setup>
import LogoHeader from "@/components/LogoHeader/LogoHeader.vue";
import ListOfRooms from "@/components/ListOfRooms/ListOfRooms.vue";
import CreateRoom from "@/components/CreateRoom/CreateRoom.vue";
</script>

<style lang="scss" scoped>
@import "@/common/design.scss";

.home-wrapper {
  @include flex-center;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  width: 100%;
  flex-direction: column;
}
</style>
