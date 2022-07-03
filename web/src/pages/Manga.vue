<template>
    <v-main>
        <v-row class="d-flex justify-center py-16">
            <v-col cols="11" lg="5">
                <v-row v-for="(item, index) in items" :key="index">
                    <v-col>
                        <v-card flat>
                            <a @click="mangaData(item.title)"><div class="text-h4">{{item.title}}</div></a>
                            <div class="text-overline font-weight-light py-2" style="font-size: 16px !important;">{{item.date_posted}}</div>
                            <v-img :src="item.image"></v-img>
                            <div class="summary pt-4">{{item.description}}</div>
                        </v-card>
                        <v-divider class="mt-8"></v-divider>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="11" lg="3">
                <v-card height="300px" class="ml-lg-10"></v-card>
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
                        title: 'Top 10 Classic Manga',
                        date_posted: 'July 03, 2022',
                        image: require('../assets/japanese-manga.jpg'),
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                    {
                        title: 'Top 10 Manga Similar To Solo Leveling',
                        date_posted: 'July 03, 2022',
                        image: require('../assets/solo-leveling.jpg'),
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                    {
                        title: 'Top 10 Isekai Manga',
                        date_posted: 'July 03, 2022',
                        image: require('../assets/japanese-manga.jpg'),
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                ]
            }
        },
        methods: {
            mangaData(title) {
                this.$router.push(`/manga/${title}`)
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