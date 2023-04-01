<template>
  <div wh-full flex-center>
    <div>
      <div font-700 class="text">Welcome to ErkeLost Size</div>
      <div class="subTitle" color-000000DE>Your Admin Dashboard</div>
      <div flex-center gap-2>
        <v-btn
          rounded="lg"
          border
          size="large"
          variant="text"
          prepend-icon="mdi-wechat"
        >
          <template v-slot:prepend>
            <v-icon color="success"></v-icon>
          </template>
          sign in with wechat
        </v-btn>
        <v-btn
          rounded="lg"
          border
          size="large"
          variant="text"
          prepend-icon="mdi-qqchat"
        >
          <template v-slot:prepend>
            <v-icon color="blue"></v-icon>
          </template>
          sign in with qq
        </v-btn>
      </div>
      <SignIn />
      <div my-8 flex-center>
        <span>or sign in with</span>
      </div>
      <div mb-4>
        <div mb-2>Username</div>
        <v-text-field variant="outlined"></v-text-field>
        <div mb-2>Password</div>
        <v-text-field variant="outlined"></v-text-field>
      </div>
      <div>
        <v-btn block size="large" color="primary" variant="flat">
          Sign In
        </v-btn>
      </div>
      <div flex my-4 items-center>
        <div>New to Modernize?</div>
        <v-btn variant="plain" font-700 color="primary" :ripple="false">
          Create a account
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
:deep(.v-field__field) {
  height: 44px !important;
  padding: 0;
}

:deep(.v-field__input) {
  padding-top: 0px;
  --v-field-padding-bottom: 0px;
}
.subTitle {
  font-size: 0.875rem !important;
  font-weight: 400;
  line-height: 1.1rem;
  letter-spacing: 0.009375em !important;
  font-family: inherit !important;
  text-transform: none !important;
  margin: 0 0 28px;
}
.text {
  font-size: 1.5rem !important;
  font-weight: 600;
  line-height: 2rem;
  letter-spacing: normal !important;
  font-family: inherit !important;
  text-transform: none !important;
  margin: 0 0 8px;
}
</style>
