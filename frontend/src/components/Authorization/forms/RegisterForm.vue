<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "vuex";
import TextInput from "./elements/TextInput.vue";
import PasswordInput from "./elements/PasswordInput.vue";
import SubmitBtn from "./elements/SubmitBtn.vue";
import Text from "./elements/Text.vue";

const emit = defineEmits(['showLogin'])
const login = ref("");
const password = ref(["", ""]);
const { dispatch } = useStore();
let formError = ref(0);
let errorMsg = ref("");

function errorHandle(arg: number) {
  formError.value = arg;
  setTimeout(() => {
    formError.value = 0;
  }, 2000);
}
async function handleSubmit(e: any): Promise<void> {
  e.preventDefault();
  if (password.value[0] !== password.value[1]) {
    errorMsg.value = `Password and repeated password are not the same.`;
    return errorHandle(2);
  }
  try {
    await dispatch('REGISTER', { login: login.value, password: password.value[0] });
    errorMsg.value = "";
    emit("showLogin");
  } catch (error: any) {
    if (error?.response?.status === 409) {
      errorHandle(1);
      errorMsg.value = `This login is already taken.`;
    } else console.log(error);
  }
}

</script>

<template>
  <form class="register-form" @submit="handleSubmit">
    <TextInput v-model="login" placeholder="Username or email address" :class="{ invalid: formError === 1 }" />
    <PasswordInput v-model="password[0]" placeholder="New password" :class="{ invalid: formError === 2 }" />
    <PasswordInput v-model="password[1]" placeholder="Repeat your password" :class="{ invalid: formError === 2 }" />
    <Text v-if="formError" :warning="true">{{ errorMsg }}</Text>
    <Text @click="$emit('showLogin')">Back to login</Text>
    <SubmitBtn>Sign up</SubmitBtn>
  </form>
</template>


<style lang="scss" scoped>
@import "@/common/animations.scss";

.register-form {
  display: flex;
  flex-direction: column;
  height: 520px;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
}

.invalid {
  animation-name: shakeX;
  animation-duration: 0.85s;
  outline: 3px solid red;
}
</style>
