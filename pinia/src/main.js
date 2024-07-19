import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import Header from "./components/header.vue";

const pinia = createPinia();
const app = createApp(App);

app.component("app-header", Header);
app.use(pinia);
app.use(router);
app.mount("#app");
