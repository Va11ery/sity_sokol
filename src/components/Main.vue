<template>
  <div class="main-security">
    <div
      class="main-security__img"
      style="
        min-height: calc(100vh - 180px);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      "
    >
      <div class="pb-8">
        <div class="container-main">
          <v-card-actions class="pl-4">
            <v-btn style="font-size: 36px; font-weight: 600;" size="x-large" variant="outlined" color="white">Оставить заявку </v-btn>
          </v-card-actions>
        </div>
      </div>
    </div>

    <div style="background: #3c435c; padding-bottom: 100px">
      <div class="fill-height container">
        <div class="why-me ptb-100" style="color: #ffa000">Услуги</div>
        <v-row no-gutters>
          <v-col v-for="(i, index) in cards" :key="index" cols="6" sm="4">
            <v-card class="ma-2" max-width="400">
              <v-img :src="i.img" height="300px" cover></v-img>
              <v-card-title>{{ i.title }}</v-card-title>

              <v-card-text>
                {{ i.text }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>

    <div style="background: #f5f5f5">
      <div class="fill-height container">
        <div class="why-me ptb-100">О нас</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardImg from "../assets/cards_img_3.svg";
import Camera2 from "../assets/camera_2.jpg";
import fon from "../assets/fon.jpg";
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
];
</script>

<style lang="scss" scoped>
.container-main {
  max-width: 1800px;
  margin: 0 auto;
}
.sub-title {
  font-weight: 500;
  font-size: 28px;
}
.main-security {
  background-image: url("@/assets/main_png.png");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}
.why-me {
  font-size: 6vw;
  line-height: 6vw;
  font-weight: 700;
  font-family: Oswald, sans-serif;
}
</style>
