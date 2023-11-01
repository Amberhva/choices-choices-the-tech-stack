import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "/components/Home.vue";
import Over from "/components/Over.vue";
import Expertise from "/components/Expertise.vue";
import Klimaatadaptatie from "/components/Klimaatadaptatie.vue";
import Waterkwaliteit from "/components/Waterkwaliteit.vue";
import Brain from "/components/Brain.vue";
import Projecten from "/components/Projecten.vue";
import Kennisbank from "/components/Kennisbank.vue";
import Team from "/components/Team.vue";
import Contact from "/components/Contact.vue";
import Partners from "/components/Partners.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/over", component: Over },
    { path: "/expertise", component: Expertise },
    { path: "/klimaatadaptatie", component: Klimaatadaptatie },
    { path: "/waterkwaliteit", component: Waterkwaliteit },
    { path: "/brain", component: Brain },
    { path: "/projecten", component: Projecten },
    { path: "/kennisbank", component: Kennisbank },
    { path: "/team", component: Team },
    { path: "/contact", component: Contact },
    { path: "/partners", component: Partners },
];

const router = new VueRouter({
    routes,
});

export default router;
