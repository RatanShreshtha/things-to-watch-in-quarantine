import { createRouter, createWebHistory } from 'vue-router'
import About from '/src/views/About.vue'
import Home from '/src/views/Home.vue'
import List from '/src/views/List.vue'
import Detail from '/src/views/Detail.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
