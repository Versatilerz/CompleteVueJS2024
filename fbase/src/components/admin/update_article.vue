<template>
  <div class="row justify-content-md-center">
    <div class="col col-lg-5">
      <h1>Update article</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            v-model="formData.title"
          />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea
            class="form-control"
            id="description"
            rows="3"
            v-model="formData.description"
          ></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Update</button>
      </form>
      <hr />
      <button @click.prevent="deleteNote" class="btn btn-danger">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { DB } from "@/firebase/configs";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
// console.log(route.params.id);

const formData = reactive({
  title: "",
  description: "",
});

//get document by ID
const docRef = doc(DB, "notes", route.params.id);
getDoc(docRef)
  .then((snapshot) => {
    if (!snapshot.exists()) {
      throw new Error("Could not find this note");
    }
    // console.log(snapshot.data());
    formData.title = snapshot.data().title;
    formData.description = snapshot.data().description;
  })
  .catch((error) => {
    console.log(error);
  });

const submitForm = async () => {
  try {
    const docRef = doc(DB, "notes", route.params.id);
    await updateDoc(docRef, { ...formData });
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

//delete a note
const deleteNote = async () => {
  try {
    const docRef = doc(DB, "notes", route.params.id);
    await deleteDoc(docRef);
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
</script>
