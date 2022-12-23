/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from "./webfontloader";
// import vuetify from "./vuetify";
// Styles
import "@mdi/font/css/materialdesignicons.css";
// import "vuetify/styles";
import { useThemeStore } from "../store/modules/theme";
// Composables
import { createVuetify } from "vuetify";
// Types
import type { App } from "vue";

const defaultThemeColor = {
  // light: {
  //   colors: {
  //     primary: "#bfa",
  //     secondary: "#5CBBF6",
  //   },
  // },
};
export async function registerPlugins(app: App) {
  const { defaultTheme } = storeToRefs(useThemeStore());
  loadFonts();
  app.use(
    createVuetify({
      // theme: {
      //   // defaultTheme: defaultTheme.value,
      //   themes: {
      //     // light: {
      //     //   colors: {
      //     //     primary: "#bfa",
      //     //     secondary: "#5CBBF6",
      //     //   },
      //     // },
      //     ...defaultThemeColor,
      //   },
      // },
    })
  );
}
