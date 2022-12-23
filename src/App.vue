<template>
  <v-theme-provider :theme="defaultTheme">
    <v-app>
      <v-main>
        <RelaxedLayout>
          <template #header>
            <div class="flex-center h-full bg-#D0A245FF">Header</div>
          </template>
          <template #tab>
            <div class="flex-center h-full bg-#6DCB6C">Tab</div>
          </template>
          <template #sider>
            <div class="h-full bg-#6CCBC8">
              <div class="flex-center h-56px">Sider</div>
            </div>
          </template>
          <template #footer>
            <div class="flex-center h-full bg-#D061D8">Footer</div>
          </template>
          <div v-for="i in 50" :key="i" class="text-center">
            {{ i + count }}
            <v-btn rounded="lg" color="primary" @click="increment">
              Rounded Button
            </v-btn>
          </div>
        </RelaxedLayout>
        <div @click="drawer = !drawer" fixed top-80 right-2 z-99999>
          <v-btn icon="mdi-heart" color="primary"></v-btn>
        </div>
        <v-navigation-drawer width="300" v-model="drawer" temporary>
          <v-btn rounded="pill" @click="changeTheme('light')" color="primary">
            light Button
          </v-btn>
          <v-btn rounded="pill" @click="changeTheme('dark')" color="primary">
            dark Button
          </v-btn>
          <v-color-picker v-model="color"></v-color-picker>
          {{ color }}
        </v-navigation-drawer>
      </v-main>
    </v-app>
  </v-theme-provider>
</template>

<script setup lang="ts">
// import { useTheme } from "vuetify";
import { resolve } from "node:path";
import { useVuetify } from "./composable/vuetify";
import { useSettingStore } from "./store/modules/setting";
import { useThemeStore } from "./store/modules/theme";
// const theme = useTheme();
// function changeTheme() {
//   theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
// }
// const vuetify = useVuetify();
const instance = getCurrentInstance();
nextTick(() => {
  console.log(instance?.root?.ctx!.$vuetify.theme.current.colors.primary);
  const theme = instance?.root?.ctx!.$vuetify.theme.current;
  console.log(theme);
  theme.colors.primary = "#abf";
  console.log(theme);
});
const color = ref("");
watch(color, (newValue) => {
  const docEle = document.documentElement;
  docEle.classList.add("v-theme--light");
  docEle.style.setProperty("--v-theme-primary", "200,156,132");
  console.log(docEle);

  // console.log(document.documentElement);
  // const theme = instance?.root?.ctx!.$vuetify.theme.current;
  // console.log(theme);
  // instance?.root?.ctx!.$vuetify.theme.current.colors.primary = 'red'
  // theme.colors.primary = newValue;
});
const { count } = storeToRefs(useSettingStore());
const { defaultTheme } = storeToRefs(useThemeStore());
const { increment } = useSettingStore();
const { changeTheme } = useThemeStore();
const drawer = ref(false);
</script>
<style>
.v-theme--light {
  color-scheme: normal;
  --v-theme-background: 255, 255, 255;
  --v-theme-background-overlay-multiplier: 1;
  --v-theme-surface: 255, 255, 255;
  --v-theme-surface-overlay-multiplier: 1;
  --v-theme-surface-variant: 66, 66, 66;
  --v-theme-surface-variant-overlay-multiplier: 2;
  --v-theme-on-surface-variant: 238, 238, 238;
  --v-theme-primary: 98, 0, 238;
  --v-theme-primary-overlay-multiplier: 2;
  --v-theme-primary-darken-1: 55, 0, 179;
  --v-theme-primary-darken-1-overlay-multiplier: 2;
  --v-theme-secondary: 3, 218, 198;
  --v-theme-secondary-overlay-multiplier: 1;
  --v-theme-secondary-darken-1: 1, 135, 134;
  --v-theme-secondary-darken-1-overlay-multiplier: 1;
  --v-theme-error: 176, 0, 32;
  --v-theme-error-overlay-multiplier: 2;
  --v-theme-info: 33, 150, 243;
  --v-theme-info-overlay-multiplier: 1;
  --v-theme-success: 76, 175, 80;
  --v-theme-success-overlay-multiplier: 1;
  --v-theme-warning: 251, 140, 0;
  --v-theme-warning-overlay-multiplier: 1;
  --v-theme-on-background: 0, 0, 0;
  --v-theme-on-surface: 0, 0, 0;
  --v-theme-on-primary: 255, 255, 255;
  --v-theme-on-primary-darken-1: 255, 255, 255;
  --v-theme-on-secondary: 0, 0, 0;
  --v-theme-on-secondary-darken-1: 255, 255, 255;
  --v-theme-on-error: 255, 255, 255;
  --v-theme-on-info: 255, 255, 255;
  --v-theme-on-success: 255, 255, 255;
  --v-theme-on-warning: 255, 255, 255;
  --v-border-color: 0, 0, 0;
  --v-border-opacity: 0.12;
  --v-high-emphasis-opacity: 0.87;
  --v-medium-emphasis-opacity: 0.6;
  --v-disabled-opacity: 0.38;
  --v-idle-opacity: 0.04;
  --v-hover-opacity: 0.04;
  --v-focus-opacity: 0.12;
  --v-selected-opacity: 0.08;
  --v-activated-opacity: 0.12;
  --v-pressed-opacity: 0.12;
  --v-dragged-opacity: 0.08;
  --v-theme-kbd: 33, 37, 41;
  --v-theme-on-kbd: 255, 255, 255;
  --v-theme-code: 245, 245, 245;
  --v-theme-on-code: 0, 0, 0;
}
</style>
