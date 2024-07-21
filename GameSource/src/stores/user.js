import { defineStore } from "pinia";
// import router for redirects
import router from "@/router";

/// firebase
import { auth, db } from "@/utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDoc, doc, setDoc, updateDoc } from "firebase/firestore";

const default_user = {
  uid: null,
  email: null,
  firstName: null,
  lastName: null,
  isAdmin: null,
};

export const useUserStore = defineStore("user", {
  state: () => ({
    isLoading: false,
    user: default_user,
    auth: false,
  }),
  getters: {},
  actions: {
    async register(formData) {
      try {
        this.isLoading = true;

        // register user
        const response = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        //redirect to dashboard
        router.push({ name: "dashboard" });
      } catch (error) {
        throw new Error(error.code);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
