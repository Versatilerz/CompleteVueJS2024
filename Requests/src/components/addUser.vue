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

    <button class="btn btn-primary" @click.prevent="submitForm">Submit</button>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import { useToast } from "vue-toast-notification";

const $toast = useToast();
const isLoading = ref(false);

const user = reactive({
  name: "",
  lastname: "",
});

const submitForm = async () => {
  isLoading.value = true;
  try {
    await axios.post("http://localhost:3005/users", user);
    $toast.success("Succesfully added a new user");
  } catch (error) {
    console.log(error);
    $toast.error("Something went wrong while trying to add the user.");
  } finally {
    isLoading.value = false;
  }
};
</script>
