import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      styles: {configFile: 'src/assets/scss/variables.scss'},
    }),
    VitePWA({
      mode: 'production', //default is production
      devOptions: {
        enabled: false,
      },
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      strategies: 'generateSW', //default
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,ttf,txt}'],
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === 'https://fakestoreapi.com',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache'
            }
          },
        ]
      },
      manifest: {
        name: 'Pikirkeri Shop',
        short_name: 'Pikirshop',
        description: 'Pikirkeri simple online shop bro!!!',
        theme_color: '#52a8f2',
        background_color:'#52a8f2',
        display: 'standalone',
        icons: [
          {
            "src": "/icons/manifest-icon-192.maskable.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "/icons/manifest-icon-192.maskable.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/icons/manifest-icon-512.maskable.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "/icons/manifest-icon-512.maskable.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

