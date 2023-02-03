// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    //
    theme: "light",
  }),
  actions: {
    setTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
  },
});
