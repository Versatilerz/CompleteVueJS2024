import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 5,
    car: {
      brand: "",
      color: "",
    },
  }),
});
