<script setup>
const props = defineProps(["cars"]);
</script>

<template>
  <div>
    <ul>
      <li v-for="car in cars" :key="car.model">
        <span>{{ car.brand }}</span
        >: {{ car.model }}
      </li>
    </ul>
  </div>
</template>
