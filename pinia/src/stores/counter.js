import axios from "axios";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    posts: [],
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
  actions: {
    add() {
      this.counter++;
    },
    subtract() {
      this.counter--;
    },
    async getPosts(limit) {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
        );
        this.posts = response.data;
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
