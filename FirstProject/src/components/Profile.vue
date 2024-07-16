<script setup>
const emit = defineEmits(["updateLastName", "updateAge"]);

const props = defineProps({
  userName: {
    type: String,
    required: true,
    default: "N/A",
  },
  userLastName: {
    type: String,
    validator(value) {
      if (value === "van Gestel") {
        return true;
      } else {
        return false;
      }
    },
  },
  userAge: [Number, String],
  userParents: Object,
  updateAgeAgain: Function,
});

const updateLastName = () => {
  emit("updateLastName", "van Avendonk");
};
</script>

<template>
  <div class="user_profile">
    <h3>User profile</h3>
    <ul>
      <li>
        <span>Name: {{ userName }}</span>
      </li>
      <li>
        <span>Last name: {{ userLastName }}</span>
      </li>
      <li>
        <span>Age: {{ userAge }}</span>
      </li>
    </ul>
    <h3>Parents names</h3>
    <ul>
      <li v-for="(value, key, index) in userParents" :key="index">
        {{ value }}
      </li>
    </ul>
    <hr />
    <button @click="updateLastName">Change from the child</button>
    <button @click="emit('updateAge')">age + alert</button>
    <button @click="updateAgeAgain(25)">Update again to 25</button>
  </div>
</template>

<style scoped>
span {
  font-weight: 800;
}
.user_profile {
  border: 1px solid #2196f3;
  padding: 10px;
}
</style>
