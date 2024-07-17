import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.directive("awesome", {
  beforeMount(el, binding, vnode) {
    setTimeout(() => {
      el.innerHTML = "Hello Guys, 3 seconds have passed";
    }, 3000);
    setTimeout(() => {
      el.innerHTML = `Hello again, 6 seconds have passed - ${binding.value}`;
      console.log(binding);
      if (binding.arg === "red") {
        el.style.color = "red";
      }
      if (binding.modifiers.blue) {
        el.style.color = "blue";
      }
    }, 6000);
  },
});
app.mount("#app");
