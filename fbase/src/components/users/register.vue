<template>
  <div class="row justify-content-md-center">
    <div class="col col-lg-5">
      <h1>Register</h1>
      <hr />
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="formData.email"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="formData.password"
          />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { auth } from "@/firebase/configs";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const register = ref(true);
const router = useRouter();

const formData = reactive({
  email: "",
  password: "",
});

const registerUser = async () => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );
    if (!response) {
      throw new Error("srry something went wrong");
    }
    router.push("/");
  } catch (error) {
    console.log(error.message);
  }
};

const submitForm = () => {
  if (register.value) {
    registerUser();
  } else {
    // login
  }
};
</script>
