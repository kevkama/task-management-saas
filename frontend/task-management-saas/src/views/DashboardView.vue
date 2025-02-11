<template>
  <div class="min-h-screen bg-gray-100 p-6 flex justify-center">
    <div class="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">Task Dashboard</h1>
      <TaskForm />
      <hr class="my-4" />
      <TaskList />
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskForm from '../components/TaskForm.vue';
import TaskList from '../components/TaskList.vue';
</script>

<style scoped>
/* Add animations or additional styles here */
</style>
