<script lang="ts" setup>
import { computed } from 'vue';

const emit = defineEmits(["update:modelValue"])
const props = defineProps<{ modelValue: string }>()
const text = computed({
  get: () => props.modelValue,
  set: (text: string) => emit("update:modelValue", text),
});

</script>

<template>
  <input class="textInput" v-model="text" type="text" placeholder="Login" name="login" minlength="6" maxlength="50"
    required />
</template>

<style lang="scss" scoped>
.textInput {
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
    background: rgba(255, 255, 255, 0.4);
    outline: none;
  }
}

@media screen and (min-width: 555px) {
  .textInput {
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

  input:-webkit-autofill {
    -webkit-text-fill-color: white !important;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #242b44 inset !important;
  }
}
</style>
