import { getEnvVariables } from '@/env';
import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import { createApi } from '@/plugins/api';
import { createBem } from '@vuebits/bem';
import router from './router';
import store from './store';

(async () => {
  const {
    API_URL
  } = await getEnvVariables();
  const app = createApp(App);
  app
    .use(createApi({ baseURL: API_URL }))
    .use(createBem({ hyphenate: true }))
    .use(store)
    .use(router)
    .mount('#app');
})();
