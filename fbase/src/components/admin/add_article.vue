<template>
    <div class="row justify-content-md-center">
        <div class="col col-lg-5">
            <h1>Add article</h1>
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" v-model="formData.title">
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" id="description" rows="3" v-model="formData.description"></textarea>
                </div>
           
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
  import { reactive } from 'vue';
  const formData = reactive({
    title:'',
    description:''
  });

  const submitForm = () => {
    console.log(formData);
  }
</script>