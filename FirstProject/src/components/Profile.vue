<script setup>
import { defineProps } from "vue";

const props = defineProps(["name", "lastname"]);
</script>

<template>
  <div class="user_profile">
    <h3>User profile</h3>
    <ul>
      <li>
        <span>Name: {{ name }}</span>
      </li>
      <li>
        <span>Last name: {{ lastname }}</span>
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
