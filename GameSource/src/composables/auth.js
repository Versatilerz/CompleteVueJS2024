import { ref } from "vue";

import { useUserStore } from "@/stores/user";

//Firebase
import { auth } from "@/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const firstLoad = () => {
  const userStore = useUserStore();
  const isLoading = ref(true);

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // auto login
      await userStore.autoSignIn(user.uid);
    }
    isLoading.value = false;
  });
  return { isLoading };
};
