<template>
    <v-main>
        <v-row class="d-flex justify-center py-16">
            <v-col cols="11" lg="5">
                <v-row v-for="(item, index) in items" :key="index">
                    <v-col>
                        <v-card flat>
                            <a @click="animeData(item.title)"><div class="text-h4">{{item.title}}</div></a>
                            <div class="text-overline font-weight-light py-2" style="font-size: 16px !important;">{{item.date_posted}}</div>
                            <v-img :src="item.image"></v-img>
                            <div class="summary pt-4">{{item.description}}</div>
                        </v-card>
                        <v-divider class="mt-8"></v-divider>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="11" lg="3">
                <v-card class="ml-lg-10 pa-5">
                    <div class="text-h6">Suggestions</div>
                    <v-divider class="mb-5 mt-2"></v-divider>
                    <div class="text-h6 mb-2">Manga</div>
                    <v-row v-for="item in suggestions" :key="item.title">
                        <v-col>
                            <div class="text-h6"><a @click="goto(item.title)">{{item.title}}</a></div>
                            <v-img :src="item.image"></v-img>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-main>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        title: 'Top 10 Action Anime',
                        date_posted: 'July 03, 2022',
                        image: require('../assets/demon-slayer.jpg'),
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                    {
                        title: 'Top 5 Game Anime',
                        date_posted: 'July 03, 2022',
                        image: require('../assets/sword-art-online.jpg'),
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                ],
                suggestions: [
                    {
                        title: 'Top 10 Classic Manga',
                        image: require('../assets/japanese-manga.jpg'),
                    },
                    {
                        title: 'Top 10 Manga Similar To Solo Leveling',
                        image: require('../assets/solo-leveling.jpg'),
                    },
                    {
                        title: 'Top 10 Isekai Manga',
                        image: require('../assets/japanese-manga.jpg'),
                    },
                ]
            }
        },
        methods: {
            goto(title) {
                this.$router.push(`/azt-webmagz/manga/${title}`);
            },
            animeData(title) {
                this.$router.push(`/azt-webmagz/anime/${title}`)
            }
        }
    }
</script>

<style>
.summary {
    font-family: "Times New Roman", Times, serif;
    font-size: 20px
}
</style>