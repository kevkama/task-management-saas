<script setup>
import { ref, onMounted } from "vue";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const user = ref(null);
const router = useRouter();

onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
  });
});

const logout = async () => {
  await signOut(auth);
  router.push("/");
};
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link v-if="user" to="/dashboard">Dashboard</router-link>
      <button v-if="user" @click="logout">Logout</button>
      <router-link v-else to="/login">Login</router-link>
    </nav>
    <router-view />
  </div>
</template>
