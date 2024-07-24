import * as yup from "yup";
import { ref } from "vue";

//need acces to userstore.
import { useUserStore } from "@/stores/user";

export const updateProfile = () => {
  const userStore = useUserStore();
  const firstName = ref(userStore.user.firstName);
  const lastName = ref(userStore.user.lastName);

  const isLoading = ref(false);
  const formSchema = yup.object({
    firstname: yup
      .string()
      .required("First name is required")
      .max(100, "Your name is to long"),
    lastname: yup
      .string()
      .required("Last name is required")
      .max(100, "Your name is to long"),
  });

  const onSubmit = (value) => {
    console.log(value);
  };

  return { isLoading, onSubmit, firstName, lastName, formSchema };
};
