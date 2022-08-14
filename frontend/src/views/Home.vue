<template setup>
  <div class="home-wrapper">
    <LogoHeader />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoHeader from "@/components/logoHeader/LogoHeader.vue";

export default defineComponent({
  name: "Home",
  components: { LogoHeader },
});
</script>

<style lang="scss" scoped>
@import "@/common/design.scss";

.home-wrapper {
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  @include flex-center;
}
</style>
