<template>
    <div>
      <!-- Toggle Button (Shows on Mobile) -->
      <button @click="isOpen = !isOpen" class="absolute top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md md:hidden">
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
  
      <!-- Sidebar -->
      <div
        :class="['fixed md:relative top-0 left-0 h-full w-64 bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-lg transition-transform duration-300', isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0']"
      >
        <div class="p-4 text-lg font-bold bg-gradient-to-r from-purple-500 to-indigo-500">
          Task Management
        </div>
  
        <nav class="flex-1">
          <router-link to="/" class="block p-4 hover:bg-gray-700 transition duration-300">Home</router-link>
          <router-link to="/dashboard" class="block p-4 hover:bg-gray-700 transition duration-300">Dashboard</router-link>
        </nav>
  
        <div class="p-4">
          <button
            @click="logout"
            class="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { auth } from '../firebaseConfig';
  import { signOut } from 'firebase/auth';
  
  const router = useRouter();
  const isOpen = ref(false); // Sidebar visibility state
  
  const logout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  };
  </script>
  
  <style scoped>
  /* Prevent body overflow when sidebar is open */
  body {
    overflow-x: hidden;
  }
  </style>
  