import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "../src/views/HomePage.vue";
import FAQPage from "../src/views/FAQPage.vue";
import ContactUs from "../src/views/ContactUs.vue";
import OurVision from "../src/views/OurVision.vue";
import LegalNotice from "../src/views/LegalNotice.vue";
import TermsConditions from "../src/views/TermsConditions.vue";
import PrivacyPolicy from "../src/views/PrivacyPolicy.vue";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: "/", name: "index", component: HomePage},
        {path: "/faq-page", name: "faq", component: FAQPage},
        {path: "/contact-us", name: "contact-us", component: ContactUs},
        {path: "/our-vision", name: "our-vision", component: OurVision},
        {path: "/legal-notice", name: "legal-notice", component: LegalNotice},
        {path: "/terms-conditions", name: "terms-conditions", component: TermsConditions},
        {path: "/privacy-policy", name: "privacy-policy", component: PrivacyPolicy},
    ],
});

export default router;
