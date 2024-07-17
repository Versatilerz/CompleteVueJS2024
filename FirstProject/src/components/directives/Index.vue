<script setup>
import { ref } from "vue";

const textToRender = ref("New test Reactive");
const lastName = ref("Nils");
const vUserLastName = {
  mounted(el, binding) {
    el.innerHTML = binding.value;
  },
};
</script>

<template>
  <div v-awesome="'How awsome is this?!'">custom-directive-Awsome</div>
  <div v-awesome="textToRender">custom-directive-Awsome</div>
  <div v-awesome:red="textToRender">custom-directive-Awsome</div>
  <div v-awesome.blue.big="textToRender">custom-directive-Awsome</div>
  <div v-user-lastName="lastName"></div>
</template>
