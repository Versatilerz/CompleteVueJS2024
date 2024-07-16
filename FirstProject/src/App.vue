<script setup>
import Header from "@/components/AppHeader.vue";
import Footer from "@/components/AppFooter.vue";
import Profile from "@/components/Profile.vue";
import { reactive } from "vue";

const data = reactive({
  userName: "Nils",
  lastName: "van Gestel",
  userAge: 35,
  parents: {
    father: "Mario",
    mother: "Leslie",
  },
});

const updateName = () => {
  data.userName = "Janne";
};

const updateAge = () => {
  data.userAge = 34;
  alert("Data Changed from child!");
};

const updateAgeAgain = (value) => {
  data.userAge = value;
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
      @updateLastName="data.lastName = $event"
      @updateAge="updateAge"
      :updateAgeAgain="updateAgeAgain"
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
