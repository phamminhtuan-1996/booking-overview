import { createApp } from 'vue'
import App from './App.vue'
import { BootstrapVue3 } from 'bootstrap-vue-3';
import { createPinia } from "pinia";
import '@/styles/style.scss';
import Datepicker from '@vuepic/vue-datepicker';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import '@vuepic/vue-datepicker/dist/main.css'
import router from './router'

const app = createApp(App);
app.use(router);
app.use(BootstrapVue3);
app.component('DatepickerPlugin', Datepicker);
app.component('vSelect', vSelect);
app.use(createPinia());
app.mount('#app');
