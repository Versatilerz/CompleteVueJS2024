<template>
  <app-header></app-header>
        <div class="container">
            <div>
              <button 
                type="button" 
                class="btn btn-primary me-3"
                @click="activeComp = Users"
              >Users</button>

              <button 
                type="button" 
                class="btn btn-secondary"
                @click="activeComp = AddUsers"
              >Add users</button>
            </div>
            <hr/>
            <component :is="activeComp"></component>
        </div>
</template>

<script setup>
  import Users from '@/components/users.vue';
  import AddUsers from '@/components/addUser.vue';
  import { shallowRef } from 'vue';

  const activeComp = shallowRef(Users);
</script>