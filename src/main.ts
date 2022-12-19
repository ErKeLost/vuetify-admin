/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";
import "uno.css";
import "./style/index.css";
// Composables
import { createApp } from "vue";
import RelaxedLayout from "@relaxed/layout";
import { setupStore } from "@/store";
// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);
setupStore(app);
registerPlugins(app);
app.use(RelaxedLayout);
app.mount("#app");
