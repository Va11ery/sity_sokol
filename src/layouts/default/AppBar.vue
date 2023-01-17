<template>
 <v-app-bar :elevation="0"  color="info" >
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

     <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>
</v-app-bar>
</template>

<script lang="ts" setup>

import { ref } from 'vue'
 import { useAppStore } from '@/store/app'
 const store = useAppStore()
</script>
