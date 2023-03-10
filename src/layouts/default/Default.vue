<template>
  <v-layout>
    <default-bar />

    <default-view />

    <Footer />
  </v-layout>
</template>

<script lang="ts" setup>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
import Footer from "./Footer.vue";
import { useAppStore } from "@/store/app";
const store = useAppStore();
</script>

<style scoped></style>
