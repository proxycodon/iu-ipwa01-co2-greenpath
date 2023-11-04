// Import the required functions and modules from Vue.js router
import { createRouter, createWebHistory } from "vue-router";

// Import the individual Vue.js views to be routed
import HomePage from "../src/views/HomePage.vue";
import FaqPage from "../src/views/FaqPage.vue";
import ContactUs from "../src/views/ContactUs.vue";
import OurVision from "../src/views/OurVision.vue";
import LegalNotice from "../src/views/LegalNotice.vue";
import TermsConditions from "../src/views/TermsConditions.vue";
import PrivacyPolicy from "../src/views/PrivacyPolicy.vue";

// Creation of the router with the defined routes
const router = createRouter({
    // Using WebHashHistory for the routes (URLs with #)
    history: createWebHistory(),
    routes: [
        // Definition of the individual routes and assignment to the Vue.js views
        {path: "/", name: "index", component: HomePage},
        {path: "/faq-page", name: "faq", component: FaqPage},
        {path: "/contact-us", name: "contact-us", component: ContactUs},
        {path: "/our-vision", name: "our-vision", component: OurVision},
        {path: "/legal-notice", name: "legal-notice", component: LegalNotice},
        {path: "/terms-conditions", name: "terms-conditions", component: TermsConditions},
        {path: "/privacy-policy", name: "privacy-policy", component: PrivacyPolicy},
    ],
});

// Export the created router for use in other parts of the application
export default router;
