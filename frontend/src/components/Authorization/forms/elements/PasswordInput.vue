
<script lang="ts" setup>
import { computed } from 'vue';

const emit = defineEmits(["update:modelValue"])
const props = defineProps<{ modelValue: string }>()
const password = computed({
  get: () => props.modelValue,
  set: (password: string) => emit("update:modelValue", password),
});

</script>

<template>
  <input class="passwordInput" v-model="password" type="password" placeholder="Password" name="password" minlength="6"
    maxlength="50" pattern=".*[0-9].*" required />
</template>

<style lang="scss" scoped>
.passwordInput {
  color: white;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  width: 260px;
  border-radius: 25px;
  /* color: $main-color; */
  padding: 25px;
  font-size: 14px;

  &::placeholder {
    /* color: $main-color; */
  }

  &:focus {
    /* color: $navy-blue; */
  }

  &:focus {
    background: rgba(255, 255, 255, 0.4);
    outline: none;
  }
}

@media screen and (min-width: 840px) {
  .passwordInput {
    background: #242b44;
    /* color: $font-color; */

    &::placeholder {
      /* color: $font-color; */
    }

    &:focus {
      color: white;
      background: #2d3352;
      outline: none;
    }
  }
}
</style>
