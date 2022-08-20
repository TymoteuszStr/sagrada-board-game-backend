<script lang="ts" setup>
</script>

<template>
   <div class="wrapper">
      <input type="text" placeholder="type your message..." class="inputMsg" />
      <div class="messages-container">
         <p class="message">test</p>
         <p class="message">test</p>
         <p class="message">test</p>
         <p class="message">test</p>
      </div>
   </div>
</template>

<style lang="scss" scoped>
.wrapper {
   position: fixed;
   bottom: 0;
   width: 100vw;
   display: flex;
   flex-direction: column;

   .messages-container {
      display: flex;
      order: 1;
      flex-direction: column;
      background-color: rgba(255, 255, 255, .1);
      height: 0px;
      overflow: auto;
      backdrop-filter: blur(10px);
      pointer-events: none;
      justify-content: flex-end;

      .message {
         color: white;
      }
   }

   input:focus+.messages-container {
      height: calc(100vh - 60px);
      transition: all .5s ease-in-out;
   }

   input {
      order: 2;
      width: 100%;
      background-color: rgb(0, 0, 0);
      color: white;
      outline: none;
      padding: 20px 30px;
   }

}
</style>