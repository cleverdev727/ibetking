import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router';
import { getImage } from './helper';

const app = createApp(App);

app.config.globalProperties.$getImage = getImage;

app.use(router);

app.mount('#app')