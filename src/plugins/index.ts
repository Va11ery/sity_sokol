/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'

// Types
import type { App } from 'vue'
import naive from 'naive-ui'
export function registerPlugins (app: App) {
  loadFonts()
  app
    .use(vuetify)
    .use(naive)
    .use(router)
    .use(pinia)
}
