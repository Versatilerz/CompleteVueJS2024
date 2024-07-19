import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 5,
    attempts: 0,
    prizes: [
      "first place",
      "a car",
      "a beer",
      "guitar",
      "aww so sad... you win nothing",
    ],
    car: {
      brand: "",
      color: "",
    },
  }),
  getters: {
    getCount(state) {
      return state.counter;
    },
    getAttemps(state) {
      return state.attempts;
    },
    getPrizes(state) {
      let prize = "";
      state.attempts++;

      for (let step = 0; step < state.counter; step++) {
        prize = state.prizes[Math.floor(Math.random() * state.prizes.length)];
      }

      return { prize, attempts: this.getAttemps };
    },
  },
});
