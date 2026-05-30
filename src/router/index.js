import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import ReadmeGenerator from "@/views/ReadmeGenerator.vue"
import New from "@/components/New.vue";
import githelp from "@/views/githelp.vue";

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
    },
    {
        path: "/git",
        name: "githelp",
        component: githelp
    }

]

export default createRouter({
    history: createWebHistory(),
    routes
})