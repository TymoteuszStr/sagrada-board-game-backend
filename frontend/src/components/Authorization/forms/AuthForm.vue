<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "vuex";
import TextInput from "./elements/TextInput.vue";
import PasswordInput from "./elements/PasswordInput.vue";
import SubmitBtn from "./elements/SubmitBtn.vue";
import Text from "./elements/Text.vue";
import { useRouter } from "vue-router";

const login = ref("");
const password = ref("");
const { dispatch } = useStore();
const router = useRouter();
let formError = ref(false);

async function handleSubmit(e: any) {
  e.preventDefault();
  try {
    await dispatch('LOGIN', { login: login.value, password: password.value });
    router.push("/home");
  } catch (err) {
    formError.value = true;
    setTimeout(() => {
      formError.value = false;
    }, 2000);
  }
}
</script>

<template>
  <form class="auth-form" @submit="handleSubmit">
    <TextInput v-model="login" :class="{ invalid: formError }" />
    <PasswordInput v-model="password" :class="{ invalid: formError }" />
    <Text v-if="formError" :isWarning="true">Login or password is incorrect.</Text>
    <Text @click="$emit('showRegister')">Create an account</Text>
    <SubmitBtn>Sign in</SubmitBtn>
  </form>
</template>
<style lang="scss" scoped>
@import "@/common/animations.scss";

.auth-form {
  display: flex;
  flex-direction: column;
  height: 450px;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
}

.invalid {
  animation-name: shakeX;
  animation-duration: 0.85s;
  border: 1px solid red;
}
</style>
