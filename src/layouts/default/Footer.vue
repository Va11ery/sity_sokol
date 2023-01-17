<template>

<v-footer
    class="bg-indigo-lighten-1 text-center d-flex flex-column justify-space-between"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>


 <div class="text-h6">
  Охранная организация Cокол
 </div>
    <div>
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>

<script lang="ts" setup>
  //
const icons =  [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ]
</script>
