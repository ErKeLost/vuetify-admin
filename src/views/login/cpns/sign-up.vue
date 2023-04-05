<template>
  <div fixed right-8 bottom-20>
    <v-btn icon="mdi-wrench" size="x-large" @click="showSetting"> </v-btn>
  </div>
  <v-navigation-drawer v-model="drawer" width="350" location="right" temporary>
    <div mx-6 my-4>Setting Editor</div>
    <v-divider></v-divider>
    <div mx-6 my-4>Theme Change</div>
    <v-container justify="space-around" flex>
      <v-col cols="12" md="4" justify="space-around">
        <v-sheet>
          <v-btn density="default" icon="mdi-white-balance-sunny"></v-btn>
        </v-sheet>
      </v-col>
      <v-col cols="12" md="4" justify="space-around">
        <v-sheet>
          <v-btn
            density="default"
            icon="mdi-theme-light-dark"
            @click="toggleDark()"
          ></v-btn>
        </v-sheet>
      </v-col>

      <v-col cols="12" md="4" justify="space-around">
        <v-sheet>
          <v-btn density="default" icon="mdi-moon-waning-crescent"></v-btn>
        </v-sheet>
      </v-col>
    </v-container>
    <div mx-6 my-4>Theme Light Color</div>
    <v-container>
      <v-row justify="space-around">
        <v-col
          v-for="rounded in defaultThemeLightColor"
          :key="String(rounded)"
          cols="12"
          md="4"
        >
          <v-sheet>
            <div></div>
            <v-sheet
              border
              rounded="xl"
              class="mx-auto"
              flex-center
              height="60"
              width="74"
            >
              <v-avatar :color="rounded"></v-avatar>
            </v-sheet>
            <div></div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <div mx-6 my-4>Theme Dark Color</div>
    <v-container>
      <v-row justify="space-around" flex>
        <v-col
          v-for="rounded in defaultThemeLightColor"
          :key="String(rounded)"
          cols="12"
          md="4"
        >
          <v-sheet>
            <div></div>
            <v-sheet
              border
              rounded="xl"
              class="mx-auto"
              flex-center
              height="60"
              width="74"
            >
              <v-avatar :color="rounded"></v-avatar>
            </v-sheet>
            <div></div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <div mx-6 my-4>
      <div my-4>Color Change</div>
      <v-color-picker v-model="color" hide-inputs width="100%"></v-color-picker>
    </div>
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

const defaultThemeLightColor = [
  "#5d87ff",
  "#ff5d87",
  "#ff875d",
  "#875dff",
  "#ff875d",
  "#5dff87",
];
</script>

<style lang="scss" scoped></style>
