<template>
    <div class="bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-3xl font-bold mb-6 text-gray-800">Tasks</h2>
      <div v-for="task in tasks" :key="task.id" class="bg-gray-100 p-6 mb-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
        <h3 class="text-2xl font-semibold mb-2 text-gray-800">{{ task.title }}</h3>
        <p class="text-gray-600 mb-4">{{ task.description }}</p>
        <button @click="deleteTask(task.id)" class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-300">Delete</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import axiosInstance from '../axiosConfig';
  
  interface Task {
    id: string;
    title: string;
    description: string;
  }
  
  const tasks = ref<Task[]>([]);
  
  const fetchTasks = async () => {
    try {
      const response = await axiosInstance.get('/tasks');
      tasks.value = response.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };
  
  const deleteTask = async (id: string) => {
    try {
      await axiosInstance.delete(`/task/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  
  onMounted(() => {
    fetchTasks();
  });
  </script>
  
  <style scoped></style>