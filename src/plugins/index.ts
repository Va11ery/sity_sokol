/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import pinia from "../store";
import router from "../router";

// Types
import type { App } from "vue";
import naive from "naive-ui";
import YmapPlugin from "vue-yandex-maps";
const settings = {
  apiKey: "23323365-4ff9-4242-9f6f-3313554c730e", // Индивидуальный ключ API
  lang: "ru_RU", // Используемый язык
  coordorder: "latlong", // Порядок задания географических координат
  debug: false, // Режим отладки
  version: "2.1", // Версия Я.Карт
};
export function registerPlugins(app: App) {
  loadFonts();
  app.use(vuetify).use(naive).use(router).use(YmapPlugin, settings).use(pinia);
}
