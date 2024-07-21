<template>
  <div class="signin_container">
    <!-- loader -->
    <div class="text-center" v-show="userStore.isLoading">
      <v-progress-circular indeterminate color="primary" />
    </div>

    <Form
      @submit="onSubmit"
      :validation-schema="formSchema"
      v-show="!userStore.isLoading"
    >
      <h1 v-text="!type ? 'Sign in' : 'Register'"></h1>

      <div class="form-group">
        <Field
          name="email"
          :value="'Nils@hotmail.com'"
          v-slot="{ field, errors, errorMessage }"
        >
          <input
            type="text"
            class="form-control"
            placeholder="Enter your email"
            v-bind="field"
            :class="{ 'is-invalid': errors.length !== 0 }"
          />
          <div class="input_alert" v-if="errors.length > 0">
            {{ errorMessage }}
          </div>
        </Field>
      </div>
      <div class="form-group">
        <Field
          name="password"
          :value="'testing123'"
          v-slot="{ field, errors, errorMessage }"
        >
          <input
            type="text"
            class="form-control"
            placeholder="Enter your password"
            v-bind="field"
            :class="{ 'is-invalid': errors.length !== 0 }"
          />
          <div class="input_alert" v-if="errors.length > 0">
            {{ errorMessage }}
          </div>
        </Field>
      </div>

      <button
        type="submit"
        class="btn mb-3 btn-block"
        v-text="!type ? 'Sign in' : 'Register'"
      ></button>
      <hr />
      <div class="form_swap" @click="type = !type">
        <span v-if="type">I want to <b>Sign in</b></span>
        <span v-else>I want to <b>Register</b></span>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Field, Form } from "vee-validate";
import * as yup from "yup";
import { ref } from "vue";

//auth store
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();

const type = ref(false);

const formSchema = yup.object({
  email: yup.string().required("Email is required").email("Not a valid email"),
  password: yup.string().required("Password is required").min("5"),
});

const onSubmit = (values, { resetForm }) => {
  if (type.value) {
    //register
    userStore.register(values);
  } else {
    //signin
    userStore.signIn(values);
  }
};
</script>
