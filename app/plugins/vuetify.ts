import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { md3 } from "vuetify/blueprints";
import "@/assets/styles/main.scss"

const light = {
  dark: false,
  colors: {
    primary: "#2569E0",
    background: "#F0F4F8",
  },
};

const dark = {
  dark: true,
  colors: {
    primary: "#2C3E50",
    background: "#181818",
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    blueprint: md3,
    theme: {
      defaultTheme: "dark",
      themes: {
        light,
        dark,
      },
    },
  });
  app.vueApp.use(vuetify);
});
