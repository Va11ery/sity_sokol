<template>
  <v-app :theme="store.$state.theme">
    <default-bar />

    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
import { useAppStore } from '@/store/app'
 const store = useAppStore()
</script>
