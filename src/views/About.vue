<template>
    <CustomParallax class="image">
        <v-content>
            <v-container fluid>
                <v-card color="transparent" height="50vh">
                    <v-row align="center" justify="center" class="pb-12">
                        <v-col class="text-center">
                            <v-card-title class="justify-center white--text display-1">
                            Meet The Thesings
                            </v-card-title>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card>
                    <v-row align="center" justify="center" class="px-4">
                        <v-col cols="9" class="text-center">
                                <v-card-text>
                                    My love for videography started when I was eight years old. My dad was a little league football coach and I taped his
                                    games. My videos evolved as we played baseball in the back yard. Ever since I was old enough for my parents to trust
                                    me with a video camera I have loved using them.
                                    <br><br>
                                    I started Thesing Family Films when I made a "Year in Review" video for our family. At first, the "Thesing Family Films
                                    Presents" at the beginning of the film was just something funny I did to make it look professional. As time went on, I
                                    cultivated a vroacious love of wedding videography and good storytelling. I started using my iPhone at weddings to
                                    capture footage to make highlight videos. Then Amy and I decided to get a new DSLR camera for shooting professional
                                    quality video.
                                    <br><br>
                                    I began filming weddings in 2015 and have developed my skills rapidly. I edit all films in Final Cut Pro, a professional
                                    video editing software used in Hollywood. Remember 300 and The Social Network? Both were edited with Final Cut
                                    Pro. I like to frequent the Apple Store to play with the latest and greatest iMacs that support Ultra High Definition
                                    Resolution and amazing video processors.
                                    <br><br>
                                    By day I am a Math Teacher at Metro Early College High School where I teach Statistics, Engineering, and Calculus.
                                    Check out <a href="https://www.youtube.com/watch?v=rpk_TcpaJQg&feature=youtu.be">this video</a> of a series of pendulums that my father-in-law and I created using mathematical modeling.
                                    <br><br>
                                    My wife and I got married in 2010 and we have two beautiful daughters who are two and three years old.
                                </v-card-text>
                        </v-col>
                        <v-col cols="3">
                            <v-img src="../assets/john.png"/>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card class="transparent elevation-0 mb-12">
                    <v-row justify="center">
                        <v-col cols="3" class="pt-0">
                            <div class="white-custom">
                                <v-img src="../assets/Family1.jpg"/>
                            </div>
                        </v-col>
                        <v-col cols="3" class="pt-0">
                            <div class="white-custom">
                                <v-img src="../assets/Family2.jpg"/>
                            </div>
                        </v-col>
                        <v-col cols="3" class="pt-0">
                            <div class="white-custom">
                                <v-img src="../assets/Family3.jpg"/>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-container>
        </v-content>
    </CustomParallax>
</template>

<style scoped>
.white-custom {
    background-color: white;
    padding: 4px;
}
.image {
    background-image: url("../assets/Beach.jpeg")
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
}
</script>