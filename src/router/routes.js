// Import the required functions and modules from Vue.js router
import { createRouter, createWebHistory } from "vue-router";

// Import the individual Vue.js views to be routed
import HomePage from "@/views/HomePage.vue";
import FaqPage from "@/views/FaqPage.vue";
import ContactUs from "@/views/ContactUs.vue";
import OurVision from "@/views/OurVision.vue";
import LegalNotice from "@/views/LegalNotice.vue";
import TermsConditions from "@/views/TermsConditions.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";
import NotFound from "@/views/404NotFound.vue";

// Creation of the router with the defined routes
const router = createRouter({
    // Using WebHistory for the routes
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
        {path: "/:catchAll(.*)", name: "404", component: NotFound},
    ],
});

// Export the created router for use in other parts of the application
export default router;
