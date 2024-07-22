import { defineStore } from "pinia";
import { useUserStore } from "./user";
import router from "@/router";

//firebase
import { db } from "@/utils/firebase";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";

let articlesCol = collection(db, "articles");

export const useArticleStore = defineStore("article", {
  state: () => ({
    homeArticles: "",
    adminArticles: "",
    adminLastVisible: "",
  }),
  getters: {},
  actions: {
    async addArticle(formData) {
      try {
        // get current user who posts the article
        const userStore = useUserStore();
        const user = userStore.getUserData;

        // post DOC in db
        const newArticle = doc(articlesCol);
        await setDoc(newArticle, {
          timestamp: serverTimestamp(),
          owner: {
            uid: user.uid,
            firstName: user.firstName,
            lastName: user.lastName,
          },
          ...formData,
        });

        // redirect user
        router.push({ name: "articles", query: { reload: true } });
        return true;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },
  },
});
