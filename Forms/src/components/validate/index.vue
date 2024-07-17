<script setup>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const formSchema = yup.object({
  name: yup
    .string()
    .required("The name is required")
    .min(5, "Name must be minimal of 5 characters")
    .max(15, "Only 15 charaters are allowed"),
});

const onSubmit = (value, { resetForm }) => {
  resetForm();
};

// const isRequired = (value) => {
//   if (!value) {
//     return "Name is required";
//   }
//   return true;
// };

// const validateName = (value) => {
//   if (value === "Steve") {
//     return "You are not allowed steve";
//   }
//   return true;
// };
</script>

<template>
  <Form @submit="onSubmit" :validation-schema="formSchema">
    <div class="mb-3">
      <label for="name">Name</label>
      <Field name="name" placeholder="Enter name" />
      <ErrorMessage name="name" as="div" v-slot="{ message }">
        <div class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </ErrorMessage>
    </div>

    <button class="btn btn-primary">Submit</button>
  </Form>
</template>

<style scoped></style>
