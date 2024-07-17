<template>
    <div class="p-3 mb-2 bg-success text-white"
        v-if="data.display"
    >
        Hello
    </div>
    <button class="btn btn-primary" 
        @click="data.display = !data.display"
    >
        Toggle
    </button>
</template>

<script setup>
   import { reactive } from 'vue';

   const data = reactive({
    display:false
   })
</script>
