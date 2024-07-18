<script setup>
import { ref } from "vue";

const status = ref(false);
</script>

<template>
  <button class="btn btn-primary" @click="status = !status">Toggle</button>

  <transition mode="out-in">
    <div
      class="p-3 mb-2 bg-danger text-white rounded"
      v-if="!status"
      key="status_off"
    >
      Off
    </div>
    <div
      class="p-3 mb-2 bg-success text-white rounded"
      v-else="status"
      key="status_on"
    >
      On
    </div>
  </transition>
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
