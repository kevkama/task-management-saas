<script setup>
import { signInWithGoogle } from "../auth"; // Import the sign-in function
</script>

<template>
  <div>
    <h1>Login</h1>
    <button @click="signInWithGoogle">Login with Google</button>
  </div>
</template>
