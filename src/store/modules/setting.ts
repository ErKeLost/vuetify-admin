import { defineStore } from "pinia";

export const useSettingStore = defineStore("counter", () => {
  const count = ref(20);
  function increment() {
    count.value++;
  }

  return { count, increment };
});
