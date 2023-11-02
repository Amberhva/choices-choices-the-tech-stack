// Deze code initialiseert een Vue.js-applicatie, configureert de router voor navigatie, en bevestigt
// de applicatie aan een specifiek DOM-element met de ID "app" om deze weer te geven en te laten werken.
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.mount("#app");
