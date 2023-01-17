<template>
 <v-app-bar :elevation="0">
 <v-avatar
              size="65px"
            >
              <v-img

                alt="Avatar"
                src="@/assets/logo.png"
              ></v-img>

            </v-avatar>
            <v-app-bar-title>
              ОО Сокол
            </v-app-bar-title>
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
