<template>
 <v-app-bar :elevation="0">
  <template v-slot:append>
    <v-btn icon="mdi-magnify"></v-btn>
     <v-btn
        :prepend-icon="store.$state.theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="store.setTheme()"
      >Toggle Theme</v-btn>
  </template>
</v-app-bar>
</template>

<script lang="ts" setup>

import { ref } from 'vue'
 import { useAppStore } from '@/store/app'
 const store = useAppStore()
</script>
