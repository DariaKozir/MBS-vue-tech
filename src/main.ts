import { createApp } from 'vue';
import { createPinia } from "pinia";
import { router }from "@/router";
import '@/sass/app.scss';
import App from '@/App.vue';
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
})

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App).use(pinia).use(router).use(vuetify).mount('#app');
