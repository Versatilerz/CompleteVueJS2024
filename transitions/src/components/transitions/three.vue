<script setup>
import { reactive } from "vue";

const data = reactive({
  users: ["Nils", "Janne", "Finn"],
  name: "",
});

const addUser = () => {
  if (!data.users.includes(data.name) && data.name !== "") {
    data.users.unshift(data.name);
    data.name = "";
  }
};

const removeUser = (index) => {
  data.users.splice(index, 1);
};
</script>

<template>
  <div class="mb-3">
    <input type="text" v-model="data.name" />
    <button class="btn btn-primary" @click="addUser">Add user</button>
  </div>
  <div>
    <ul class="list-group pl-0">
      <transition-group name="fade" appear>
        <li
          class="list-group-item"
          v-for="(user, index) in data.users"
          :key="user"
          @click="removeUser(index)"
        >
          {{ user }}
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: 1s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-move {
  transition: transform 1s;
}
</style>
