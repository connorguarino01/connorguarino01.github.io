<template>
    <CustomParallax class="image">
        <v-content>
            <v-container fluid>
                <v-card color="transparent elevation-0" height="75vh">
                    <v-row align="center" justify="center">
                        <v-col class="text-center">
                            <v-card-title class="justify-center white--text display-1">
                            BEAUTIFUL COUPLES.
                            <br>
                            BEAUTIFUL FILMS.
                            </v-card-title>
                            <v-btn fab x-large outlined color="white" @click="overlay=!overlay">
                                <v-icon>mdi-play</v-icon>
                            </v-btn>
                            <v-overlay :value="overlay">
                                <v-row justify="end" class="wide pt-4">
                                    <v-btn fab outlined color="white" @click="overlay=!overlay">
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </v-row>
                                <v-row justify="center" class="pt-4">
                                    <iframe width="840" height="472.5" src="https://www.youtube.com/embed/tpZIFlbkqec" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </v-row>
                            </v-overlay>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card class="px-4 mb-12">
                    <v-row align="center" justify="center" class="white">
                        <v-col cols="5" class="pa-0">
                            <v-img height="100%" contain src="../assets/Flowers.jpg"/>
                        </v-col>
                        <v-col cols="7" class="text-center">
                                <v-card-title class="justify-center display-1">
                                    We're Glad You're Here
                                </v-card-title>
                                <v-card-text>
                                    We are a studio based out of Columbus, Ohio, specializing in wedding
                                    videography. We love to capture all of the important moments of your
                                    special day so that you can share it with those you love.
                                    We work dilligently to produce stunning wedding films for all of our clients
                                    at affordable prices. We will not stop working until we feel that your
                                    final product is as good as it can be.
                                    <br><br>
                                    Feel free to look around our site, check out our films, and contact
                                    us so that we can hear about your love story and get to know you
                                    before we shoot your amazing wedding film!
                                </v-card-text>
                        </v-col>
                    </v-row>
                </v-card>
            </v-container>
        </v-content>
    </CustomParallax>
</template>

<style scoped>
.image {
    background-image: url("../assets/Couple Kissing Final.jpg")
}
.wide {
    width: 90vw;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import CustomParallax from '../components/CustomParallax.vue';

@Component({
    components: {
        CustomParallax,
    },
})

export default class App extends Vue {
    public overlay = false;
}
</script>