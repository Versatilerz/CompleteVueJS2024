<template>
  <app-header></app-header>
  <div class="container">
    <router-view />
    <router-view name="notify" />
  </div>
</template>

<script setup></script>
