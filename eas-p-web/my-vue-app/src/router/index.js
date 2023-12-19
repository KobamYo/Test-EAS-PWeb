import { createRouter, createWebHistory } from 'my-vue-app'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: about,
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/login',
        component: () => import('../views/LoginView.vue')
    },
    {
        path: '/channels',
        component: () => import('../views/ShowChannelView.vue')
    },
    {
        path: '/register',
        component: () => import('../views/RegisterView.vue')
    }
]

export default router