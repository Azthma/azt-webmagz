import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const Home = () => import("../pages/Home.vue");

const Manga = () => import("../pages/Manga.vue");
const MangaData = () => import("../pages/MangaData.vue");

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/manga",
        name: "manga",
        component: Manga,
    },
    {
        path: "/manga/:title",
        name: "mangaData",
        component: MangaData,
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;