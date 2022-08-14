{
<template setup>
  <div class="line"></div>
  <h1>SAGRADA</h1>
  <div class="line"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LogoHeader",
  components: {},
});
</script>

<style lang="scss" scoped>
@import "@/common/design.scss";
h1 {
  color: white;
  font-size: 36px;
  margin: 19px 0px;
  letter-spacing: 2px;
  font-weight: 400;
  background: linear-gradient(
    -90deg,
    rgba(231, 112, 112, 1),
    rgba(220, 182, 102, 1),
    rgba(91, 192, 113, 0.9),
    rgba(107, 159, 208, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.line {
  width: 100%;
  height: 1px;
  background: white;
  flex-grow: 1;
  background: linear-gradient(
    90deg,
    rgba(3, 4, 5, 0.03),
    rgba(152, 102, 170, 1),
    rgba(107, 159, 208, 0.65)
  );
  &:last-child {
    transform: scaleX(-1);
  }
}
</style>

}
