<template>
  <div fixed right-8 bottom-20>
    <v-btn icon="mdi-wrench" size="x-large" @click="showSetting"> </v-btn>
  </div>
  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-btn color="primary">颜色测试</v-btn>
    <v-btn color="primary" @click="toggleDark()">主题测试</v-btn>
    {{ theme.global.name.value }}
    <v-color-picker v-model="color"></v-color-picker>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
const drawer = ref<boolean>(false);
const theme = useTheme();
const color = computed({
  get() {
    return theme.themes.value.light.colors.primary;
  },
  set(val: string) {
    localStorage.setItem("theme-primary", val);
    theme.themes.value.light.colors.primary = val;
    theme.themes.value.dark.colors.primary = val;
  },
});
const isDark = useDark({
  onChanged(dark: boolean) {
    console.log(dark);

    theme.global.name.value = dark ? "light" : "dark";
  },
});
const toggleDark = useToggle(isDark);

function showSetting() {
  drawer.value = !drawer.value;
}
</script>

<style lang="scss" scoped></style>
