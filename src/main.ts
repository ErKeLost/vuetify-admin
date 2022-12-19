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
console.log(RelaxedLayout);

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

registerPlugins(app);
app.use(RelaxedLayout);
app.mount("#app");
