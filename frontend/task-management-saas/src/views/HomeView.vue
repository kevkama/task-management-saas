<template>
  <div class="home-container">
    <nav class="navbar">
      <h2>Task Management</h2>
      <div class="nav-links">
        <router-link to="/" class="nav-item">Home</router-link>
        <router-link to="/dashboard" class="nav-item">Dashboard</router-link>
      </div>
    </nav>

    <main class="content">
      <h1>Welcome to Task Management</h1>
      <p>Manage your tasks efficiently with our platform.</p>

      <div class="auth-links">
        <router-link to="/login" class="btn">Login</router-link>
        <router-link to="/register" class="btn">Register</router-link>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* General Styling */
.home-container {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Navbar */
.navbar {
  width: 95%;
  background: #333;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-item:hover {
  text-decoration: underline;
}

/* Main Content */
.content {
  text-align: center;
  margin-top: 50px;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

p {
  font-size: 1.2rem;
  color: #555;
}

/* Buttons */
.auth-links {
  margin-top: 20px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  margin: 10px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.3s;
}

.btn:hover {
  background: #0056b3;
}
</style>
