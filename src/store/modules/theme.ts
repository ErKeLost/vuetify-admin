import { defineStore } from "pinia";
export const useThemeStore = defineStore("theme", () => {
  const defaultTheme = ref("light");
  function changeTheme(mode: string) {
    defaultTheme.value = mode === "light" ? "dark" : "light";
  }

  return { defaultTheme, changeTheme };
});
