import './bootstrap';

import Alpine from 'alpinejs';
import { createApp } from 'vue';
import app from './components/app.vue';
import solver from './components/solver.vue';

createApp(app).mount('#app');
createApp(solver).mount('#solver');

window.Alpine = Alpine;

Alpine.start();
