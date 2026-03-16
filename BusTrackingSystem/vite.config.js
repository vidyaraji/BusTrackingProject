import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({registerType:'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'icons/*.png'
      ],
      workbox: {
        maximumFileSizeToCacheInBytes: 7 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,png,svg,jpg,jpeg,webp}'],
      },
      // Additional configuration options can go here
      manifest: {
        name: 'College Bus Tracking',
        short_name: 'College BT',
        description: 'College Bus Tracking System',
        theme_color: '#ffffff',
        icons: [
          
    {
      "src": "/pwa-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/pwa-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/pwa-maskable-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "/pwa-maskable-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
        ]
      }
    })
  ],
})
