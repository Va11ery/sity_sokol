<template>

<v-footer
    class="bg-indigo-lighten-1 text-center d-flex flex-column justify-space-between"
  >
  <div class="d-flex">
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link }}
      </v-btn>
</div>

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
const links =   [
        'Услуги',
        'Контакты',

      ]
</script>
