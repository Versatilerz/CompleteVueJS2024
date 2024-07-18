<template>
  <h2>Add users</h2>
  <div v-show="isLoading">
    <app-loader />
  </div>
  <div v-show="!isLoading">
    <div class="form-group mb-3">
      <label>Name</label>
      <input class="form-control" type="text" v-model="user.name" />
    </div>

    <div class="form-group mb-3">
      <label>Lastname</label>
      <input class="form-control" type="text" v-model="user.lastname" />
    </div>

    <button class="btn btn-primary" @click.prevent="submitForm()">
      Submit
    </button>
  </div>
</template>

<script setup>
import addUser from "@/composables/addUser";
import { reactive } from "vue";

const user = reactive({
  name: "",
  lastname: "",
});
const { submitForm, isLoading } = addUser(user);
</script>
