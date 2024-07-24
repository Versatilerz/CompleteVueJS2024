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
import errorCodes from "@/utils/fbcodes";
import { useToast } from "vue-toast-notification";
const $toast = useToast();

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
  getters: {
    getUserData(state) {
      return state.user;
    },
    getUserId(state) {
      return state.user.uid;
    },
  },
  actions: {
    setUser(user) {
      this.user = { ...this.user, ...user };
      this.auth = true;
    },
    async updateProfile(formData) {
      try {
        const userRef = doc(db, "users", this.getUserId);

        await updateDoc(userRef, {
          ...formData,
        });
        console.log(formData);
        this.setUser(formData);
        $toast.success("Succesfully updated profile");
        return true;
      } catch (error) {
        console.log("test");
        $toast.error(error.message);
      }
    },
    async autoSignIn(uid) {
      try {
        const userData = await this.getUserProfile(uid);

        //update local state if we find a user
        this.setUser(userData);
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getUserProfile(uid) {
      try {
        const userRef = await getDoc(doc(db, "users", uid));
        if (!userRef.exists) {
          throw new Error("Could not find user!!");
        }

        return userRef.data();
      } catch (error) {
        throw new Error(error);
      }
    },
    async signIn(formData) {
      try {
        this.isLoading = true;

        //sign in user
        const response = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        //get userdata from database
        const userData = await this.getUserProfile(response.user.uid);

        //update local state
        this.setUser(userData);

        //redirect to dashboard
        router.push({ name: "dashboard" });
      } catch (error) {
        throw new Error(errorCodes(error.code));
      } finally {
        this.isLoading = false;
      }
    },
    async register(formData) {
      try {
        this.isLoading = true;

        // register user
        const response = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        //add user to db
        const newUser = {
          uid: response.user.uid,
          email: response.user.email,
          isAdmin: false,
        };

        await setDoc(doc(db, "users", response.user.uid), newUser);

        //update local state
        this.setUser(newUser);

        //redirect to dashboard
        router.push({ name: "dashboard" });
      } catch (error) {
        throw new Error(errorCodes(error.code));
      } finally {
        this.isLoading = false;
      }
    },
    async signOut() {
      await signOut(auth);
      this.user = default_user;
      this.auth = false;
      router.push("/");
    },
  },
});
