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
    async register(formData) {},
  },
});
