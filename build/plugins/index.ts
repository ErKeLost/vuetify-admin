import type { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import unocss from "@unocss/vite";
import unplugin from "./unplugin";
import { VitePWA } from "vite-plugin-pwa";

// import mock from "./mock";
// import visualizer from "./visualizer";

/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(
  viteEnv: ImportMetaEnv
): (PluginOption | PluginOption[])[] {
  const plugins = [
    vueJsx(),
    ...unplugin(viteEnv),
    unocss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "ViteTemplate",
        short_name: "ViteTemplate",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        navigateFallback: "/",
        cleanupOutdatedCaches: false,
      },
      // client: {
      //   installPrompt: true,
      //   periodicSyncForUpdates: 20
      // },
      devOptions: {
        enabled: true,
        type: "module",
      },
    }),
    // mock,
  ];

  if (viteEnv.VITE_VISUALIZER === "Y") {
    // plugins.push(visualizer as PluginOption);
  }
  if (viteEnv.VITE_COMPRESS === "Y") {
    // plugins.push(compress(viteEnv));
  }
  if (viteEnv.VITE_PWA === "Y" || viteEnv.VITE_VERCEL === "Y") {
    // plugins.push(pwa());
  }

  return plugins;
}
