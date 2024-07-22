import { defineStore } from "pinia";
import { useUserStore } from "./user";
import router from "@/router";

//firebase
import { db } from "@/utils/firebase";

let articlesCol = collection(db, "acticles");

export const useArticleStore = defineStore("article", {
  state: () => ({
    homeArticles: "",
    adminArticles: "",
    adminLastVisible: "",
  }),
  getters: {},
  actions: {
    async addArticle() {
      try {
      } catch (error) {}
    },
  },
});
