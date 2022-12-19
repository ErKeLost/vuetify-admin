import type { Framework } from "vuetify/types";

/**
 * Returns the current vuetify Equivalent to using `$vuetify` inside
 * templates.
 */
export function useVuetify(): Framework {
  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error(
      console.warn(
        "getCurrentInstance() returned null. useVuetify() must be called at the top of a setup function"
      )
    );
  }

  const vuetify = reactive<Framework>(instance.proxy.$root.$vuetify);

  return vuetify as Framework;
}
