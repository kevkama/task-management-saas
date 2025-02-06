import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/HomePage.vue";
import Dashboard from "../pages/Dashboard.vue";
import Login from "../pages/Login.vue"; // Import the Login page
import { auth } from "../firebaseConfig"; // Import Firebase auth

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login }, // Add this route
  {
    path: "/dashboard",
    component: Dashboard,
    meta: { requiresAuth: true }, // Protect this route
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard to check authentication
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.currentUser) {
    next("/login"); // Redirect to login if not authenticated
  } else {
    next();
  }
});

export default router;
