<template>
  <div>user profile</div>
</template>

<script setup>
import { Field, Form } from "vee-validate";
import { updateProfile } from "@/composables/user";

const { isLoading, onsubmit, firstName, lastName, formSchema } =
  updateProfile();
</script>
