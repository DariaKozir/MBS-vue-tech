import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main.vue";
import History from "@/views/History.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: Main
    },
    {
        path: '/history',
        name: 'HistoryPage',
        component: History
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
