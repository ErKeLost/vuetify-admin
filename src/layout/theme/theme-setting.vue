<template>
  <div>sign up</div>
  <v-btn color="primary">颜色测试</v-btn>
  <v-btn color="primary" @click="toggleDark()">主题测试</v-btn>
  {{ theme.global.name.value }}
  <v-color-picker v-model="color"></v-color-picker>
</template>

<script lang="ts" setup>
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
</script>

<style lang="scss" scoped></style>
