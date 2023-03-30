import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import { getSrcPath } from "../utils";

export default function unplugin(viteEnv: ImportMetaEnv) {
  // const { VITE_ICON_PREFFIX, VITE_ICON_LOCAL_PREFFIX } = viteEnv;

  // const srcPath = getSrcPath();
  // const localIconPath = `${srcPath}/assets/svg-icon`;

  /** 本地svg图标集合名称 */
  // const collectionName = VITE_ICON_LOCAL_PREFFIX.replace(
  //   `${VITE_ICON_PREFFIX}-`,
  //   ""
  // );

  return [
    Icons({
      compiler: "vue3",
      // customCollections: {
      //   [collectionName]: FileSystemIconLoader(localIconPath),
      // },
      scale: 1,
      defaultClass: "inline-block",
    }),
    AutoImport({
      imports: ["vue", "vue-router", "pinia", "@vueuse/head", "@vueuse/core"],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/composables", "src/store"],
      vueTemplate: true,
    }),
    Components({
      dts: "src/typings/components.d.ts",
      dirs: ["src/components", "src/views"],
      types: [{ from: "vue-router", names: ["RouterLink", "RouterView"] }],
      resolvers: [
        IconsResolver({
          // customCollections: [collectionName],
          // componentPrefix: VITE_ICON_PREFFIX,
        }),
        {
          type: "component",
          resolve: (name) => {
            if (name.match(/^V[A-Z]/)) return { name, from: "vuetify/lib" };
          },
        },
      ],
    }),
  ];
}
