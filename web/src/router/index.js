import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const Home = () => import("../pages/Home.vue");

const Manga = () => import("../pages/Manga.vue");
const MangaData = () => import("../pages/MangaData.vue");

const Anime = () => import("../pages/Anime.vue");
const AnimeData = () => import("../pages/AnimeData.vue");

const routes = [
    {
        path: "/azt-webmagz/",
        name: "home",
        component: Home,
    },
    {
        path: "/azt-webmagz/manga",
        name: "manga",
        component: Manga,
    },
    {
        path: "/azt-webmagz/manga/:title",
        name: "mangaData",
        component: MangaData,
    },
    {
        path: "/azt-webmagz/anime",
        name: "anime",
        component: Anime,
    },
    {
        path: "/azt-webmagz/anime/:title",
        name: "animeData",
        component: AnimeData,
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;