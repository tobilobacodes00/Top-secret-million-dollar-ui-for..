import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Helper function to get token from localStorage
const getStoredToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

// Helper function to get user from localStorage
const getStoredUser = () => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
  return null;
};

export const useAuthStore = create((set, get) => ({
  // Initial state
  user: getStoredUser(),
  token: getStoredToken(),
  loading: false,
  error: null,

  // Register action
  register: async (userData) => {
    set({ loading: true, error: null });
    const toastId = toast.loading("Creating your account...");

    try {
      const res = await axios.post(`${API_URL}/api/user/register`, userData);

      if (res.data.success) {
        const { token, user } = res.data;

        // Store in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        set({ user, token, loading: false });
        toast.success("Account created successfully!", { id: toastId });
        return { success: true };
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Registration failed. Please try again.";

      set({ error: errorMessage, loading: false });

      // Handle specific error cases
      if (err.response?.status === 409) {
        toast.error("Email already exists. Please use a different email.", {
          id: toastId,
        });
      } else if (err.response?.status === 400) {
        toast.error(err.response.data.message, { id: toastId });
      } else {
        toast.error(errorMessage, { id: toastId });
      }

      return { success: false, error: errorMessage };
    }
  },

  // Login action
  login: async (credentials) => {
    set({ loading: true, error: null });
    const toastId = toast.loading("Logging in...");

    try {
      const res = await axios.post(`${API_URL}/api/user/login`, credentials);

      if (res.data.success) {
        const { token, user } = res.data;

        // Store in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        set({ user, token, loading: false });
        toast.success("Welcome back! You've successfully logged in.", {
          id: toastId,
        });
        return { success: true };
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Login failed. Please try again.";

      set({ error: errorMessage, loading: false });

      // Handle specific error cases
      if (err.response?.status === 404) {
        toast.error("Account not found. Please check your email.", {
          id: toastId,
        });
      } else if (err.response?.status === 401) {
        toast.error("Invalid password. Please try again.", { id: toastId });
      } else {
        toast.error(errorMessage, { id: toastId });
      }

      return { success: false, error: errorMessage };
    }
  },

  // Check authentication status
  checkAuth: async () => {
    const token = get().token;
    if (!token) return { success: false };

    set({ loading: true, error: null });

    try {
      const res = await axios.get(`${API_URL}/api/user/auth`, {
        headers: {
          Authorization: token,
        },
      });

      if (res.data.success) {
        const user = res.data.user;
        localStorage.setItem("user", JSON.stringify(user));
        set({ user, loading: false });
        return { success: true, user };
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Authentication check failed";

      // If token is invalid, clear stored auth data
      if (err.response?.status === 401 || err.response?.status === 404) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        set({ user: null, token: null });
      }

      set({ error: errorMessage, loading: false });
      return { success: false, error: errorMessage };
    }
  },

  // Logout action
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ user: null, token: null });
    toast.success("You've been logged out successfully.");
    return { success: true };
  },

  // Clear error
  clearError: () => set({ error: null }),
}));
