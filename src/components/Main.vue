<template>
  <div style="background: #F5F5F5">
    <v-container class="fill-height container" >
      <div>
        <div class="title ptb-100">
          <div style="color:

#F44336">ОБЕСПЕЧИМ
          </div>
          <div style="color: #26A69A">БЕЗОПАСНОСТЬ</div>
        </div>
        <v-card-subtitle>Услуги охранного предприятия для частных лиц и компаний</v-card-subtitle>
        <v-card-actions>
          <v-btn variant="outlined"
                 size="large" color="info">Оставить заявку
          </v-btn>
        </v-card-actions>
      </div>
    </v-container>
  </div>

  <div style="background: #3C435C; padding-bottom: 100px">
    <v-container class="fill-height container">
      <div class="why-me ptb-100" style="color: #FFA000">
        Услуги
      </div>
      <v-row no-gutters>
        <v-col
          v-for="(i,index) in cards"
          :key="index"
          cols="6"
          sm="4"

        >
          <v-card
            class="ma-2"
            max-width="400"
          >
            <v-img
              :src="i.img"
              height="300px"
              cover
            ></v-img>
            <v-card-title>{{ i.title }}</v-card-title>

            <v-card-text>
              {{ i.text }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>


  <div style="background: #F5F5F5">
    <v-container class="fill-height container">
      <div class="why-me ptb-100">
        О нас
      </div>

    </v-container>
  </div>
</template>

<script lang="ts" setup>

import CardImg from '../assets/cards_img_3.svg'
import Camera2 from '../assets/camera_2.jpg'
import fon from '../assets/fon.jpg'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cards = [
  {
    title: "Охрана объектов",
    text: "Охрана недвижимости, строительных объектов, промышленных объектов",
    img: fon,
  },
  {
    title: "Сопровождение грузов",
    text: "Ж/д способом, автомобилем, самолетом, сопровождение фур",
    img: CardImg,
  },
  {
    title: "Личная охрана",
    text: "Явная личная охрана, скрытая личная охрана, телохранители",
    img: CardImg,
  },
  {
    title: "Охрана мероприятий",
    text: "Внешняя охрана, внутренняя охрана, комплексная охрана",
    img: Camera2,
  },
  {
    title: "Почасовая охрана",
    text: "Охрана объекта на сутки, охрана объекта на день: на ночь",
    img: CardImg,
  },
  {
    title: "Перевозка лекарственных и психотропных веществ",
    text: "Охранная организация имеет лицензию на перевозку лекарственных средств и психотропных веществ",
    img: CardImg,
  },
]
</script>


<style lang="scss" scoped>
.why-me {
  font-size: 6vw;
  line-height: 6vw;
  font-weight: 700;
  font-family: Oswald, sans-serif;
}
</style>
