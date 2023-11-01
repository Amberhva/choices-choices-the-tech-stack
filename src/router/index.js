import { createRouter, createWebHistory } from "vue-router";

// Importeer je componenten vanuit de 'src/components' map
import Home from "../views/Home.vue";
import Over from "../views/Over.vue";
import Expertise from "../views/Expertise.vue";
import Klimaatadaptatie from "../views/Klimaatadaptatie.vue";
import Waterkwaliteit from "../views/Waterkwaliteit.vue";
import Brain from "../views/Brain.vue";
import Projecten from "../views/Projecten.vue";
import Kennisbank from "../views/Kennisbank.vue";
import Team from "../views/Team.vue";
import Contact from "../views/Contact.vue";
import Partners from "../views/Partners.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/Over",
            name: "Over",
            component: Over,
        },
        {
            path: "/Expertise",
            name: "Expertise",
            component: Expertise,
        },
        {
            path: "/Projecten",
            name: "Projecten",
            component: Projecten,
        },
        {
            path: "/Kennisbank",
            name: "Kennisbank",
            component: Kennisbank,
        },
        {
            path: "/Team",
            name: "Team",
            component: Team,
        },
        {
            path: "/Contact",
            name: "Contact",
            component: Contact,
        },
    ],
});

export default router;
