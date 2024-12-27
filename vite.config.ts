import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { compression } from 'vite-plugin-compression2'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

import VueDevTools from 'vite-plugin-vue-devtools'

import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  const env = loadEnv(mode, process.cwd(), '')
  console.log(env.NODE_ENV)

  return {
    base: env.VITE_BASE_URL,

    // 环境变量前缀
    envPrefix: 'VITE_',

    // 插件
    plugins: [
      vue(),
      vueJsx(),
      VueDevTools(),
      compression(), // 开启 gzip 压缩
      UnoCSS(),

      // 自动引入 API
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'pinia',
          '@vueuse/core',
          'vue-i18n',
          {
            'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
          },
        ],
        dts: 'src/typings/auto-imports.d.ts',
        eslintrc: {
          enabled: true,
        },
      }),
      // 自动引入组件
      Components({
        resolvers: [
          IconsResolver({
            prefix: false,
          }),
          NaiveUiResolver(),
        ],
        dts: 'src/typings/components.d.ts',
      }),

      Icons({
        defaultStyle: 'display:inline-block',
        compiler: 'vue3',
        // autoInstall: true,
      }),
    ],

    // 解析配置
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    // 服务器配置
    server: {
      host: true,
      port: 8080,
    },

    // 预览配置
    preview: {
      port: 4000,
      open: true,
    },

    // 构建配置
    build: {
      target: 'esnext',
      reportCompressedSize: false, // 启用/禁用 gzip 压缩大小报告

      sourcemap: false,
      cssCodeSplit: true,

      // 构建优化
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // 生产环境去除 console
          drop_debugger: true, // 生产环境去除 debugger
        },
      },

      rollupOptions: {
        output: {
          // 分包配置
          manualChunks: {
            'vue-vendor': ['vue', 'vue-router', 'pinia'],
            'naive-ui': ['naive-ui'],
            axios: ['axios'],
            'es-toolkit': ['es-toolkit'],
            echarts: ['echarts'],
          },
          // 用于从入口点创建的块的打包输出格式
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: ({ name }: { name?: string }) => {
            if (name && /\.(css)$/.test(name)) {
              return 'css/[name]-[hash][extname]'
            }
            return 'assets/[name]-[hash][extname]'
          },
        },
      },
    },

    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    },
  }
})
