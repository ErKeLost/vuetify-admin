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

export async function registerPlugins(app: App) {
  const { defaultTheme } = storeToRefs(useThemeStore());
  console.log(defaultTheme.value);
  loadFonts();
  app.use(
    createVuetify({
      theme: {
        // defaultTheme: defaultTheme.value,
        themes: {
          light: {
            colors: {
              primary: "#1867C0",
              secondary: "#5CBBF6",
            },
          },
        },
      },
    })
  );
}
