<script setup>
import { reactive } from "vue";

const data = reactive({
  display: false,
  display2: true,
  display3: true,
  display4: true,
});
</script>

<template>
  <transition>
    <div class="p-3 mb-2 bg-success text-white" v-if="data.display">Hello</div>
  </transition>
  <button class="btn btn-primary" @click="data.display = !data.display">
    Toggle
  </button>
  <hr />
  <transition
    ><div class="p-3 mb-2 bg-warning text-white" v-if="data.display2">
      Hello
    </div>
  </transition>
  <button class="btn btn-primary" @click="data.display2 = !data.display2">
    Toggle
  </button>
  <hr />
  <transition name="slide"
    ><div class="p-3 mb-2 bg-danger text-white" v-if="data.display3">Hello</div>
  </transition>
  <button class="btn btn-primary" @click="data.display3 = !data.display3">
    Toggle
  </button>
  <hr />
  <transition name="slideUp"
    ><div class="p-3 mb-2 bg-danger text-white" v-if="data.display4">Hello</div>
  </transition>
  <button class="btn btn-primary" @click="data.display4 = !data.display4">
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

/* ----- */

.slide-enter-from {
  transform: translateX(50px);
  opacity: 0;
}

.slide-enter-active {
  transition: all 4s ease;
}
.slide-enter-to {
  opacity: 1;
}

.slide-leave-from {
  opacity: 1;
  background-color: red !important;
}

.slide-leave-active {
  transition: all 3s ease;
}

.slide-leave-to {
  background-color: black a !important;
  transform: translateX(100px);
  opacity: 0;
}

/* ---- */

.slideUp-enter-active {
  animation: slideup 1s ease-in-out;
}

.slideUp-leave-active {
  animation: slidedown 1s ease-in-out;
}

@keyframes slideup {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slidedown {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(100px);
  }
}
</style>
