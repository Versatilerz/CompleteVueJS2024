import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

import Header from "./components/header/index.vue";

const app = createApp(App);

app.component("app-header", Header);
app.use(router);
app.mount("#app");
