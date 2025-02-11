<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-2xl shadow-lg w-1/2">
        <h2 class="text-3xl font-semibold text-gray-900 mb-6 text-center">Create a New Task</h2>
        <form @submit.prevent="addTask" class="space-y-5">
          <!-- Title Input -->
          <div>
            <label for="title" class="block text-gray-700 font-medium mb-1">Title</label>
            <input
              v-model="title"
              id="title"
              type="text"
              placeholder="Enter task title..."
              class="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              required
            />
          </div>
  
          <!-- Description Input -->
          <div>
            <label for="description" class="block text-gray-700 font-medium mb-1">Description</label>
            <textarea
              v-model="description"
              id="description"
              placeholder="Enter task details..."
              rows="4"
              class="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
              required
            ></textarea>
          </div>
  
          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-full transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="loading"
          >
            <svg v-if="loading" class="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
              <path d="M12 2v4m0 12v4m8-8h-4m-12 0H2m15.07-7.07l-2.83 2.83m-9.9 9.9l2.83-2.83m0-9.9L5.1 9.93m9.9 9.9l-2.83-2.83" stroke-opacity="0.75"></path>
            </svg>
            <span>{{ loading ? "Adding..." : "Add Task" }}</span>
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import axiosInstance from "../axiosConfig";
  
  const title = ref("");
  const description = ref("");
  const loading = ref(false);
  
  const addTask = async () => {
    if (!title.value.trim() || !description.value.trim()) return;
    loading.value = true;
    try {
      await axiosInstance.post("/task", { title: title.value, description: description.value });
      title.value = "";
      description.value = "";
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };
  </script>
  