import { defineStore } from "pinia";
import { useUserStore } from "./user";
import router from "@/router";
import { useToast } from "vue-toast-notification";

//firebase
import { db } from "@/utils/firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  startAfter,
  updateDoc,
} from "firebase/firestore";

let articlesCol = collection(db, "articles");
const $toast = useToast();

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
    async getArticleById(id) {
      try {
        const docRef = await getDoc(doc(db, "articles", id));
        if (!docRef.exists) {
          throw new Error("Could not find article");
        }
        return docRef.data();
      } catch (error) {
        router.push({ name: "404" });
      }
    },
    async updateArticle(id, formData) {
      try {
        const docRef = doc(db, "articles", id);
        await updateDoc(docRef, {
          ...formData,
        });
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },
    async adminGetArticles(docLimit) {
      try {
        const q = query(
          articlesCol,
          orderBy("timestamp", "desc"),
          limit(docLimit)
        );
        const response = await getDocs(q);

        const lastVisible = response.docs[response.docs.length - 1];
        const articles = response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // update admin articles
        this.adminArticles = articles;
        this.adminLastVisible = lastVisible;
      } catch (error) {
        throw new Error(error);
      }
    },
    async adminGetMoreArticles(docLimit) {
      try {
        if (this.adminLastVisible) {
          let oldArticles = this.adminArticles;

          const q = query(
            articlesCol,
            orderBy("timestamp", "desc"),
            startAfter(this.adminLastVisible),
            limit(docLimit)
          );

          const response = await getDocs(q);
          const lastVisible = response.docs[response.docs.length - 1];
          const newArticles = response.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          this.adminArticles = [...oldArticles, ...newArticles];
          this.adminLastVisible = lastVisible;
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    async removeById(id) {
      try {
        await deleteDoc(doc(db, "articles", id));

        const newList = this.adminArticles.filter((article) => {
          return article.id != id;
        });

        this.adminArticles = newList;
        $toast.success("Deleted the article");
      } catch (error) {
        $toast.error("Could not delete article...");
        throw new Error(error);
      }
    },
  },
});
