import { Api } from '@/api';
import { App } from 'vue';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: Api;
  }
}
interface ApiOptions {
  baseURL: string;
}

function install (Vue: App, { baseURL }: ApiOptions): void {
  Vue.config.globalProperties.$api = new Api({
    baseURL
  });
}

export function createApi (options: ApiOptions) {
  return {
    install: (app: App) => install(app, options)
  };
}
