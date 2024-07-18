import { createApp } from "vue";
import App from "./App.vue";

import Header from "./components/header/Header.vue";
import Loader from "@/components/utils/Loader.vue";

const app = createApp(App);

app.component("app-header", Header);
app.component("app-loader", Loader);
app.mount("#app");
