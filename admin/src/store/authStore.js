import { create } from "zustand";
import API from "../services/api";

export const useAuthStore = create((set) => ({
  token: localStorage.getItem("token") || null,

  login: async (email, password) => {
    try {
      const res = await API.post("/admin/login", { email, password });
      localStorage.setItem("token", res.data.token);
      set({ token: res.data.token });
      return true;
    } catch (error) {
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ token: null });
  }
}));