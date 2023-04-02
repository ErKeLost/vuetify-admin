<template>
  <div h-full>
    <v-row no-gutters h-full>
      <v-col flex-center h-full class="login-view">
        <LoginView />
      </v-col>
      <v-col cols="4">
        <LoginAction />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.login-view {
  background-color: rgb(var(--v-theme-primary)) !important;
}
</style>
