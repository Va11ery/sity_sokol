/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          surface: "#FFFFFF",
          primary: "#1867C0",
          secondary: "#5CBBF6",
        },
      },
      dark: {
        colors: {
          surface: "#FFFFFF",
          background: "#0f1624",
        },
      },
    },
  },
});
