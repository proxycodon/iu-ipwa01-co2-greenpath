// Import the required functions from Vue.js router
import { createRouter, createWebHistory } from 'vue-router'

// Creation of the router with the defined routes
const router = createRouter({
// Using WebHistory for the routes
  history: createWebHistory(),
  routes: [
  // Definition of the individual routes and assignment to the Vue.js views
  // Using lazy loading routes for a better perfomance
    { path: '/', name: 'index', component: () => import('@/views/HomePage.vue') },
    { path: '/faq-page', name: 'faq', component: () => import('@/views/FaqPage.vue') },
    { path: '/contact-us', name: 'contact-us', component: () => import('@/views/ContactUs.vue') },
    { path: '/our-vision', name: 'our-vision', component: () => import('@/views/OurVision.vue') },
    { path: '/legal-notice', name: 'legal-notice', component: () => import('@/views/LegalNotice.vue') },
    { path: '/terms-conditions', name: 'terms-conditions', component: () => import('@/views/TermsConditions.vue') },
    { path: '/privacy-policy', name: 'privacy-policy', component: () => import('@/views/PrivacyPolicy.vue') },
    { path: '/:catchAll(.*)', name: '404', component: () => import('@/views/404NotFound.vue') }
  ]
})

// Export the created router for use in other parts of the application
export default router
