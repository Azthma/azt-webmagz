<template>
    <div class="mt-10">
        <v-card dark color="py-10" tile>
            <v-row class="d-flex justify-center">
                <v-col cols="10" lg="3">
                    <div class="text-h4 mb-2"><b>AZT WEBMAGZ</b></div>
                    <div style="color:gray;">AZT WEBMAGZ © 2022</div>
                </v-col>
                <v-col cols="10" lg="2">
                    <div class="text-h6 mb-2">Contents</div>
                    <div class="text-body-1 font-weight-light"><a @click="home" style="color:white;">Home</a></div>
                    <div class="text-body-1 font-weight-light"><a @click="manga" style="color:white;">Featured Mangas</a></div>
                    <div class="text-body-1 font-weight-light"><a @click="anime" style="color:white;">Featured Animes</a></div>
                    <div class="text-body-1 font-weight-light"><a @click="movie" style="color:white;">Featured Movies</a></div>
                </v-col>
                <v-col cols="10" lg="2">
                    <div class="text-h6 mb-2">Tourism</div>
                    <div class="text-body-1 font-weight-light"><a @click="zamboanga" style="color:white;">Zamboanga</a></div>
                    <div class="text-body-1 font-weight-light"><a @click="cebu" style="color:white;">Cebu</a></div>
                    <div class="text-body-1 font-weight-light"><a @click="manila" style="color:white;">Manila</a></div>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
    export default {
        methods: {
            home() {
                if (this.$route.path != '/') {
                    this.$router.push('/')
                }
            },
            manga() {
                if (this.$route.path != '/manga') {
                    this.$router.push('/manga')
                }
            },
            anime() {
                if (this.$route.path != '/anime') {
                    this.$router.push('/anime')
                }
            },
            movie() {
                if (this.$route.path != '/movie') {
                    this.$router.push('/movie')
                }
            },
            zamboanga() {
                if (this.$route.path != '/tourism/zamboanga') {
                    this.$router.push('/tourism/zamboanga')
                }
            },
            cebu() {
                if (this.$route.path != '/tourism/cebu') {
                    this.$router.push('/tourism/cebu')
                }
            },
            manila() {
                if (this.$route.path != '/tourism/manila') {
                    this.$router.push('/tourism/manila')
                }
            },
        }
    }
</script>