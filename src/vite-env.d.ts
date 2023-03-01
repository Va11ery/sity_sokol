/// <reference types="vite/client" />
declare module 'vue-yandex-maps';
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
