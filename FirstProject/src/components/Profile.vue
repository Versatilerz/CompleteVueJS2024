<script setup>
import { defineProps } from "vue";

const props = defineProps({
  userName: String,
  userLastName: String,
  userAge: String,
  userParents: Object,
});
</script>

<template>
  <div class="user_profile">
    <h3>User profile</h3>
    <ul>
      <li>
        <span>Name: {{ userName }}</span>
      </li>
      <li>
        <span>Last name: {{ userLastName }}</span>
      </li>
      <li>
        <span>Age: {{ userAge }}</span>
      </li>
    </ul>
    <h3>Parents names</h3>
    <ul>
      <li v-for="(value, key, index) in userParents" :key="index">
        {{ value }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
span {
  font-weight: 800;
}
.user_profile {
  border: 1px solid #2196f3;
  padding: 10px;
}
</style>
