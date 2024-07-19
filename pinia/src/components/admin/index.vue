<template>
  <div class="row">
    <h1>Admin</h1>
    <hr />
    <div class="col-sm-5">
      <p>
        <strong> Change count:{{ store.getCount }} </strong>
      </p>

      <!-- <div>
        <label class="form-label">By how much</label>
        <input type="number" class="form-control" v-model="data.amount" />
      </div>
      <br /> -->

      <button
        type="button"
        class="btn btn-primary me-3"
        @click="store.counter++"
      >
        +
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary"
        @click="store.counter--"
      >
        -
      </button>

      <hr />
      <p>{{ store.car.brand }}</p>
      <p>{{ store.car.color }}</p>
      <button type="button" class="btn btn-primary" @click="patchState">
        patch state
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();

const patchState = () => {
  store.$patch({
    counter: 100,
    car: {
      brand: "Ford",
      color: "red",
    },
  });
};
</script>
