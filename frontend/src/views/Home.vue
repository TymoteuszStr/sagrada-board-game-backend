<template setup>
  <div class="home-wrapper">
    <LogoHeader />
    <CreateRoom />
    <ListOfRooms />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoHeader from "@/components/LogoHeader/LogoHeader.vue";
import CreateRoom from "@/components/CreateRoom/CreateRoom.vue";
import ListOfRooms from "@/components/ListOfRooms/ListOfRooms.vue";

export default defineComponent({
  name: "Home",
  components: { LogoHeader, CreateRoom, ListOfRooms },
});
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
