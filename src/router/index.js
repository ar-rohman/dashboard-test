import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        meta: {
            pageName: 'Home',
        },
    },
    {
        path: '/logs',
        name: 'logs',
        component: () => import('@/views/UnavailablePage.vue'),
        meta: {
            pageName: 'Logs',
        },
    },
    {
        path: '/configuration',
        name: 'configuration',
        component: () => import('@/views/UnavailablePage.vue'),
        meta: {
            pageName: 'Configuration',
        },
    },
    {
        path: '/save-files',
        name: 'save-files',
        component: () => import('@/views/UnavailablePage.vue'),
        meta: {
            pageName: 'Save Files',
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
