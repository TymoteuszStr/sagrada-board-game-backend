<script lang="ts" setup>
import LogoHeader from "@/components/LogoHeader/LogoHeader.vue";
import PlayerContainer from "../components/NewRoom/PlayerContainer.vue";
import BoardsContainer from "@/components/NewRoom/BoardsContainer.vue";
import PlayersList from "@/components/NewRoom/PlayersList.vue";
import Chat from "@/components/Chat/Chat.vue";
</script>

<template>
  <LogoHeader />
  <h2>The game is about to start!</h2>
  <PlayerContainer />
  <BoardsContainer />
  <PlayersList />
  <Chat />
</template>

<style lang="scss" scoped>
@import "@/common/design.scss";

h2 {
  @include gradient-text-vue;
  @include flex-center;
  font-size: 34px;
}
</style>
