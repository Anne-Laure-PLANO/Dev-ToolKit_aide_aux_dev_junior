import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import ReadmeGenerator from "@/views/ReadmeGenerator.vue"
import New from "@/components/New.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path:"/readme",
        name:"readme",
        component: ReadmeGenerator
    },
    {
        path: "/card",
        name: "card",
        component: New
    }

]

export default createRouter({
    history: createWebHistory(),
    routes
})