<template>
  <div class="row">
    <div v-if="data.isLoading">
      <app-loader />
    </div>

    <div
      v-if="!data.isLoading"
      class="col-auto mb-4"
      v-for="user in data.users"
      :key="user.id"
    >
      <div class="card" style="width: 14rem">
        <img
          class="card-img-top"
          :src="`https://placebeard.it/300/300?` + user.id"
          alt="Card image cap"
        />
        <div class="card-body">
          <div class="card-text"><strong>Name:</strong> {{ user.name }}</div>
          <div class="card-text">
            <strong>Lastname:</strong> {{ user.lastname }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useToast } from "vue-toast-notification";
import { reactive } from "vue";

const data = reactive({
  users: [],
  isLoading: true,
});

const $toast = useToast();

const loadUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3005/users");
    data.users = response.data;

    data.isLoading = false;
    // $toast.success("You did it!");
  } catch (error) {
    data.isLoading = false;
    $toast.error("Error fetching data");
  }
};

loadUsers();
</script>
