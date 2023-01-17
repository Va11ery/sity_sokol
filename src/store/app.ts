// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    //
    theme: 'dark'
  }),
  actions: {
    setTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    }
  }
})
