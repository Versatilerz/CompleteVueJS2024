<template>
  <header>
    <div class="container header_container">
      <div class="logo">
        <router-link :to="{ name: 'home' }"> GameSource </router-link>
      </div>
      <div>
        <ul>
          <li v-if="!userStore.auth">
            <router-Link :to="{ name: 'signin' }"> Sign in </router-Link>
          </li>
          <span>
            <li v-if="userStore.auth">
              <span @click="userStore.signOut"> Logout </span>
            </li>
            <li>
              <router-link :to="{ name: 'dashboard' }"> Dashboard </router-link>
            </li>
          </span>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
</script>
