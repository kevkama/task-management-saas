<template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="register">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  <script setup lang="ts">
  import { ref } from 'vue';
  import { auth } from '../firebaseConfig';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  
  const email = ref('');
  const password = ref('');
  
  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      // Redirect to dashboard
    } catch (error) {
      console.error(error);
    }
  };
  </script>
  <style scoped></style>