import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("convosphere-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("convosphere-theme", theme);
    set({ theme })
  } 
}));