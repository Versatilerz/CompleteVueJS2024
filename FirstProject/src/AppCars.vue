<script setup>
import Cars from "./components/cars/Index.vue";
import AppHeader from "./components/AppHeader.vue";
import { reactive, provide } from "vue";
import Brands from "@/components/cars/Brands.vue";

const cars = reactive([
  {
    model: "F9",
    brand: "Ferrari",
  },
  {
    model: "911",
    brand: "Porsche",
  },
  {
    model: "Punta",
    brand: "Opal",
  },
]);

const updateCar = () => {
  cars[0].brand = "Lambo";
};

provide("cars", { cars, updateCar });

const brands = reactive(["Mazda", "Opal", "Ford"]);
</script>

<template>
  <AppHeader />
  <div class="container">
    <Cars />
    <button @click="updateCar">Click me</button>
    <hr />
    <Brands>
      <ul>
        <li v-for="(brand, index) in brands" :key="index">{{ brand }}</li>
      </ul>
    </Brands>
  </div>
</template>

<style scoped>
body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}

.container {
  min-height: 87vh;
  box-sizing: border-box;
  padding: 20px;
}
</style>
