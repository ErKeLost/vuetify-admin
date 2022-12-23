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
          <v-color-picker></v-color-picker>
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

const { count } = storeToRefs(useSettingStore());
const { defaultTheme } = storeToRefs(useThemeStore());
const { increment } = useSettingStore();
const { changeTheme } = useThemeStore();
const drawer = ref(false);
</script>
