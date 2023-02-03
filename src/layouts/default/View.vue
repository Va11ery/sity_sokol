<template>
  <v-main style="min-height: calc(100vh)" >

    <router-view />

  </v-main>
</template>

<script setup lang="ts">
import Animation from "@/animations/bg.vue";
//
</script>

<style>
.backanimation {
  background-color: transparent;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 100px;
  height: 600px;
  width: 600px;
  z-index: 0;
}

</style>
