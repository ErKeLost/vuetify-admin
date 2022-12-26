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
          <v-color-picker v-model="color" mode="rgb"></v-color-picker>
          {{ color }}
        </v-navigation-drawer>
      </v-main>
    </v-app>
  </v-theme-provider>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import { resolve } from "node:path";
import { useVuetify } from "./composable/vuetify";
import { useSettingStore } from "./store/modules/setting";
import { useThemeStore } from "./store/modules/theme";
// const theme = useTheme();
// function changeTheme() {
//   theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
// }
// const vuetify = useVuetify();
// const instance = getCurrentInstance();
// nextTick(() => {
//   console.log(instance?.root?.ctx!.$vuetify.theme.current.colors.primary);
//   const theme = instance?.root?.ctx!.$vuetify.theme.current;
//   console.log(theme);
//   theme.colors.primary = "#abf";
//   console.log(theme);
// });
const theme = useTheme();

const color = ref("");
watch(color, (newValue) => {
  const docEle = document.documentElement;
  docEle.classList.add("v-theme--light");
  docEle.style.setProperty("--v-theme-primary", newValue);
  console.log(docEle);
  document.querySelector("button")?.classList.remove("v-theme--light");
  console.log(document.querySelector("button"));

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
:root {
  --v-theme-primary: "#f53f3f" !important;
}
</style>
