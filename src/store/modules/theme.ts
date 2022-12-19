import { defineStore } from "pinia";
export const useThemeStore = defineStore("theme", () => {
  const defaultTheme = ref("dark");
  function changeTheme(mode: string) {
    defaultTheme.value = mode === "dark" ? "light" : "dark";
    console.log(mode === "dark");
  }

  return { defaultTheme, changeTheme };
});
