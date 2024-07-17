import { createApp } from 'vue'
import App from './App.vue'

import Header from './components/header/index.vue';
const app =  createApp(App);

app.component('app-header',Header);
app.mount('#app')
