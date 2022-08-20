<script lang="ts" setup>
// const { users } = defineProps<any>();

//temporary
const users = [
   { name: "Tymek", id: 0 },
   { name: "Basia", id: 1 },
   { name: "Olio", id: 2 },
   { name: "Olio", id: 3 },
   { name: "Olio", id: 4 },
   { name: "Olio", id: 5 },
   { name: "Olio", id: 6 },
];
</script>

<template>
   <fieldset class="wrapper">
      <legend>Players in room</legend>
      <div v-for="user in users" :key="user.id" class="user">
         <p class="user__name">{{ user.name }}</p>
         <img alt="msg-icon" />
      </div>
   </fieldset>
</template>

<style lang="scss" scoped>
.wrapper {
   width: 90%;
   display: flex;
   flex-direction: column;
   margin-right: auto;
   margin-left: auto;
   padding: 20px 15px;
   border-color: rgba(255, 255, 255, .2);
   max-width: 400px;
   min-width: 200px;
   max-height: 170px;
   overflow-y: auto;

   legend {
      color: rgba(255, 255, 255, .8)
   }

   .user {
      display: flex;
      align-items: center;

      &__name {
         color: whitesmoke;
         letter-spacing: 1px;
         padding: 5px 10px 5px 0px;
      }
   }
}
</style>
