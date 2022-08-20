<script lang="ts" setup>
import Plus from '../Shared/Plus.vue';
interface Props {
   user?: any; // add user interface later
}
const props = withDefaults(defineProps<Props>(), {
   user: null,
});

</script>
<template>
   <div class="user">
      <!-- <template v-if="props.user">
         <div class="user__img"></div>
         <div class="user__name"></div>
      </template> -->
      <Plus />
   </div>
</template>

<style lang="scss" scoped>
@import "@/common/design.scss";

.user {
   @include flex-center;
   background-color: $grey-color;
   width: 65px;
   height: 65px;
   border-radius: 50%;

   &:hover {
      @extend .active;
      cursor: pointer;
   }

}

.active {
   filter: brightness(1.55);
   transform: scale(1.05);

}
</style>
