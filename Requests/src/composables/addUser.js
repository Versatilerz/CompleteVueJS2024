import { ref } from "vue";
import axios from "axios";
import { useToast } from "vue-toast-notification";

const addUser = (user) => {
  const $toast = useToast();
  const isLoading = ref(false);

  const submitForm = async () => {
    isLoading.value = true;
    try {
      await axios.post("http://localhost:3005/users", user);
      $toast.success("Succesfully added a new user");
    } catch (error) {
      console.log(error);
      $toast.error("Something went wrong while trying to add the user.");
    } finally {
      isLoading.value = false;
    }
  };
  return { isLoading, submitForm };
};

export default addUser;
