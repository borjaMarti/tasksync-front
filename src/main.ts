import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query';

const app = createApp(App);
// Borja: Since we are using websockets to update our cache, we set staleTime to Infinity.
const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: { queries: { staleTime: Infinity } },
  },
};

app.use(router);
app.use(VueQueryPlugin, vueQueryPluginOptions);

app.mount('#app');
