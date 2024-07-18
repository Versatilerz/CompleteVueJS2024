import axios from "axios";
import { useToast } from "vue-toast-notification";
import { reactive } from "vue";

const getUsers = () => {
  const data = reactive({
    users: [],
    isLoading: true,
  });

  const $toast = useToast();

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3005/users");
      data.users = response.data;

      data.isLoading = false;
      // $toast.success("You did it!");
    } catch (error) {
      data.isLoading = false;
      $toast.error("Error fetching data");
    }
  };

  return { data, loadUsers };
};

export default getUsers;
