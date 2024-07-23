import './assets/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query';

const app = createApp(App);
const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    // Borja: Since we are using websockets to update our cache, we don't need to refetch.
    defaultOptions: { queries: { staleTime: Infinity } },
  },
};

app.use(router);
app.use(VueQueryPlugin, vueQueryPluginOptions);

app.mount('#app');
