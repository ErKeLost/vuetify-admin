<template>
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
      <v-navigation-drawer v-model="drawer" temporary> </v-navigation-drawer>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useSettingStore } from "./store/modules/setting";
const { count } = storeToRefs(useSettingStore());
const { increment } = useSettingStore();
const drawer = ref(false);
</script>
