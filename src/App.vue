<script>
// Importeer je componenten vanuit de 'src/components' map
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import Over from "./components/Over.vue";
import Expertise from "./components/Expertise.vue";
import Klimaatadaptatie from "./components/Klimaatadaptatie.vue";
import Waterkwaliteit from "./components/Waterkwaliteit.vue";
import Brain from "./components/Brain.vue";
import Projecten from "./components/Projecten.vue";
import Kennisbank from "./components/Kennisbank.vue";
import Team from "./components/Team.vue";
import Contact from "./components/Contact.vue";
import Partners from "./components/Partners.vue";
import Footer from "./components/Footer.vue";

export default {
    components: {
        Navbar,
        Home,
        Over,
        Expertise,
        Klimaatadaptatie,
        Waterkwaliteit,
        Brain,
        Projecten,
        Kennisbank,
        Team,
        Contact,
        Partners,
        Footer,
    },
};
</script>

<template>
    <Navbar />
    <Home />
    <Over />
    <Expertise />
    <Klimaatadaptatie />
    <Waterkwaliteit />
    <Brain />
    <Projecten />
    <Kennisbank />
    <Team />
    <Contact />
    <Partners />
    <Footer />
</template>
