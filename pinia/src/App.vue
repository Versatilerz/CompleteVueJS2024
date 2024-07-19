<template>
  <app-header></app-header>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useCounterStore } from "./stores/counter";
const store = useCounterStore();

store.$onAction(
  ({
    name, //name
    store, //store instance
    args, //event
    after, //hook
    onError, //hook
  }) => {
    console.log("Action!!");
    console.log(name);
    console.log(store);
    console.log(args);
    console.log(after);
    console.log(onError);
  }
);
</script>
