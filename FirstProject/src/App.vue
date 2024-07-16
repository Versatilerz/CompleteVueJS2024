<script setup>
import Header from "@/components/AppHeader.vue";
import Footer from "@/components/AppFooter.vue";
import Profile from "@/components/Profile.vue";
import { reactive } from "vue";

const data = reactive({
  userName: "Nils",
  lastName: "van Gestel",
  userAge: 25,
  parents: {
    father: "Mario",
    mother: "Leslie",
  },
});

const updateName = () => {
  data.userName = "nameIsChanged";
};
</script>

<template>
  <Header />

  <div class="container">
    <Profile
      :userName="data.userName"
      :userLastName="data.lastName"
      :userAge="data.userAge"
      :userParents="data.parents"
    />
    <button @click="updateName">Update Name</button>
  </div>

  <Footer />
</template>

<style scoped>
body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}

.container {
  min-height: 87vh;
  box-sizing: border-box;
  padding: 20px;
}
</style>
