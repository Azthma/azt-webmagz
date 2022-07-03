<template>
    <div>
        <v-card flat tile dark class="py-2">
            <v-container class="py-0 fill-height">
                <!-- <v-avatar
                    class="mr-10"
                    color="grey darken-1"
                    size="32"
                ></v-avatar> -->
                <div class="text-h6 mr-10">AZT WEBMAGZ</div>
                <v-card flat tile>
                    <v-tabs
                        v-model="tab"
                    >
                        <v-tab
                            v-for="item in items"
                            :key="item.name"
                            :to="item.link"
                        >
                            {{ item.name }}
                        </v-tab>
                        <v-menu offset-y left tile>
                            <template v-slot:activator="{ on }">
                                <v-tab v-on="on">
                                    Tourism
                                    <v-icon>mdi-chevron-down</v-icon>
                                </v-tab>
                            </template>
                            <v-list width="150px">
                                <v-subheader>{{tourism}}</v-subheader>
                                <v-divider></v-divider>
                                <v-list-item
                                    v-for="item in destinations"
                                    :key="item.name"
                                    link
                                    :to="item.link"
                                >
                                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-tabs>
                </v-card>
                <v-spacer></v-spacer>
                <v-responsive max-width="260">
                    <v-text-field
                        dense
                        flat
                        hide-details
                        rounded
                        solo-inverted
                        append-icon="mdi-magnify"
                        placeholder="search"
                        class="mt-2 mt-lg-0"
                    ></v-text-field>
                </v-responsive>
            </v-container>
        </v-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tab: null,
                items: [
                    {name: 'Home', link: '/'},
                    {name: 'Manga', link: '/manga'},
                    {name: 'Anime', link: '/anime'},
                    {name: 'Movie', link: '/movie'},
                ],
                tourism: "Philippines",
                destinations: [
                    {name: 'Zamboanga', link: '/tourism/zamboanga'},
                    {name: 'Cebu', link: '/tourism/cebu'},
                    {name: 'Manila', link: '/tourism/manila'},
                ]
            }
        },
    }
</script>