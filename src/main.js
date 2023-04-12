import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import PrimeVue from "primevue/config";


import "primevue/resources/themes/lara-dark-teal/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core
import "primeicons/primeicons.css"; //icons
import Button from "primevue/button"
import Panel from 'primevue/panel';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';

const app= createApp(App);
app.component('pv-button', Button);
app.component('Panel', Panel);
app.component('InputText', InputText);
app.component('Dropdown', Dropdown);
app.component('Calendar', Calendar);
app.component('Textarea', Textarea);
app.component('Checkbox', Checkbox);
app.component('RadioButton', RadioButton);

app.use(PrimeVue, {ripple: true});

app.mount('#app');
