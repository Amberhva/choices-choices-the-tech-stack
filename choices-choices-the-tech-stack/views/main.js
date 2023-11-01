import Vue from "vue";
import App from "./index.html";
import router from "./router"; // Importeer de routerconfiguratie

new Vue({
    render: (h) => h(App),
    router, // Gebruik de router
}).$mount("#app");
