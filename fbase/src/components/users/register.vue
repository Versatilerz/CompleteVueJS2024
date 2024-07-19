<template>
    <div class="row justify-content-md-center">
        <div class="col col-lg-5">
            <h1>Register</h1>
            <hr/>
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" v-model="formData.email">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" v-model="formData.password">
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
    email:'',
    password:''
  });

  const submitForm = () => {
    console.log(formData);
  }

</script>
