<script setup>
import { inject } from "vue";
const { cars, updateCar } = inject("cars");
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
  <button @click="updateCar">Update Car from child</button>
</template>
