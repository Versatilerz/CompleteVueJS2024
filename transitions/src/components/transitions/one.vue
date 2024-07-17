<script setup>
import { reactive } from "vue";

const data = reactive({
  display: false,
});
</script>

<template>
  <transition
    ><div class="p-3 mb-2 bg-success text-white" v-if="data.display">Hello</div>
  </transition>
  <button class="btn btn-primary" @click="data.display = !data.display">
    Toggle
  </button>
</template>

<style scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: 1s;
}

.v-enter-to {
  opacity: 1;
}
</style>
