<template>
  <h1>Add article</h1>
  <hr />
  <Form class="mb-5" @submit="onSubmit" :validation-schema="articlesSchema">
    <!-- name of the game -->
    <div class="mb-4">
      <Field name="game" v-slot="{ field, errors, errorMessage }">
        <input
          type="text"
          placeholder="Name of the game"
          v-bind="field"
          class="form-control"
          :class="{ 'is-invalid': errors.length !== 0 }"
        />
        <div class="input_alert" v-if="errors.length > 0">
          {{ errorMessage }}
        </div>
      </Field>
    </div>
    <!-- title of the article -->
    <div class="mb-4">
      <Field name="title" v-slot="{ field, errors, errorMessage }">
        <input
          type="text"
          placeholder="Title of the article"
          v-bind="field"
          class="form-control"
          :class="{ 'is-invalid': errors.length !== 0 }"
        />
        <div class="input_alert" v-if="errors.length > 0">
          {{ errorMessage }}
        </div>
      </Field>
    </div>
    <!-- Excerpt -->
    <div class="mb-4">
      <Field name="excerpt" v-slot="{ field, errors, errorMessage }">
        <textarea
          rows="3"
          placeholder="Add an excerpt"
          v-bind="field"
          class="form-control"
          :class="{ 'is-invalid': errors.length !== 0 }"
        >
        </textarea>
        <div class="input_alert" v-if="errors.length > 0">
          {{ errorMessage }}
        </div>
      </Field>
    </div>

    <!-- what you see is what you get?? -->
    <div class="mb-4">
      <wysiwyg @update="updateEditor" />
      <Field
        name="editor"
        v-model="veditor"
        v-slot="{ field, errors, errorMessage }"
      >
        <input type="hidden" v-bind="field" id="veditor" />
        <div class="input_alert" v-if="errors.length > 0">
          {{ errorMessage }}
        </div>
      </Field>
    </div>

    <!-- raiting of the game -->
    <div class="mb-4">
      <Field
        name="rating"
        value="Select a rating"
        v-slot="{ field, errors, errorMessage }"
      >
        <select
          name="rating"
          v-bind="field"
          class="form-select"
          :class="{ 'is-invalid': errors.length !== 0 }"
        >
          <option value="Select a rating">Select a rating</option>
          <option v-for="rating in ratingArray" :key="rating" :value="rating">
            {{ rating }}
          </option>
        </select>
        <div class="input_alert" v-if="errors.length > 0">
          {{ errorMessage }}
        </div>
      </Field>
    </div>

    <!-- image of the article -->
    <div class="mb-4">
      <Field name="img" v-slot="{ field, errors, errorMessage }">
        <input
          type="text"
          placeholder="Add the source of the img"
          v-bind="field"
          class="form-control"
          :class="{ 'is-invalid': errors.length !== 0 }"
        />
        <div class="input_alert" v-if="errors.length > 0">
          {{ errorMessage }}
        </div>
      </Field>
    </div>

    <v-btn type="submit"> add article </v-btn>
  </Form>
</template>

<script setup>
import { ref } from "vue";
import { Field, Form } from "vee-validate";
import articlesSchema from "./schema";
import wysiwyg from "@/utils/wysiwyg.vue";
import { useArticleStore } from "@/stores/articles";

const ratingArray = [0, 1, 2, 3, 4, 5];
const veditor = ref(" ");
const updateEditor = (value) => {
  veditor.value = value;
};

const articleStore = useArticleStore();

const onSubmit = (values, { resetForm }) => {
  console.log(values);
};
</script>
