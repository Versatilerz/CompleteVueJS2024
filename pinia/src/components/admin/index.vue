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

      <button type="button" class="btn btn-primary me-3" @click="store.add">
        +
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary"
        @click="store.subtract"
      >
        -
      </button>

      <hr />
      <p>{{ store.car.brand }}</p>
      <p>{{ store.car.color }}</p>
      <button type="button" class="btn btn-primary" @click="patchState">
        patch state
      </button>

      <hr />
      <div>
        <button
          type="button"
          class="btn btn-primary me-3"
          @click="store.getPosts(10)"
        >
          Get posts
        </button>
        <ul>
          <li v-for="post in store.posts" :key="post.id">{{ post.title }}</li>
        </ul>
      </div>
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
