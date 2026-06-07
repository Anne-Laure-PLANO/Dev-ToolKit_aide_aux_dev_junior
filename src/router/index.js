import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import ReadmeGenerator from "@/views/ReadmeGenerator.vue"
import ArticleCard from "@/components/ArticleCard.vue";
import GitHelp from "@/views/GitHelp.vue";

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
        component: ArticleCard
    },
    {
        path: "/git",
        name: "githelp",
        component: GitHelp
    }

]

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})