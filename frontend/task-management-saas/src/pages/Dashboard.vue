<script setup>
import { auth } from "../firebaseConfig";
</script>

<template>
  <div>
    <h1>Welcome to the Dashboard</h1>
    <p>You are logged in as: {{ auth.currentUser?.email }}</p>
  </div>
</template>
