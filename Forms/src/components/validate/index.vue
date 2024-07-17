<script setup>
import { Field, Form, ErrorMessage } from "vee-validate";

const isRequired = (value) => {
  if (!value) {
    return "Name is required";
  }
  return true;
};

const validateName = (value) => {
  if (value !== "Steve") {
    return "You are not steve";
  }
  return true;
};
</script>

<template>
  <Form>
    <div class="mb-3">
      <label for="name">Name</label>
      <Field
        name="name"
        :rules="[isRequired, validateName]"
        placeholder="Enter name"
      />
      <ErrorMessage name="name" />
    </div>

    <button class="btn btn-primary">Submit</button>
  </Form>
</template>

<style scoped></style>
