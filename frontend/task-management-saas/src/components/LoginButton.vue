<script setup lang="ts">
import { signInWithGoogle } from "@/auth";

const handleLogin = async () => {
  try {
    const user = await signInWithGoogle();
    console.log("Logged in user:", user);
  } catch (error) {
    console.error("Login failed:", error);
  }
};
</script>

<template>
  <button @click="handleLogin">Login with Google</button>
</template>
