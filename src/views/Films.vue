<template>
    <CustomParallax class="image">
        <v-content>
            <v-container fluid>
                <v-card class="transparent elevation-0">
                    <v-row align="center" justify="center" class="pb-12">
                        <v-col class="text-center">
                            <v-card-title class="white--text justify-center display-1">
                                Once Upon A Time
                            </v-card-title>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card class="pa-4">
                    <v-row align="center" justify="center" class="white space">
                        <v-col cols="5" class="text-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/CaBR6mDteGg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </v-col>
                        <v-col cols="5" class="text-center offset-1">
                            <v-card-title class="justify-center">
                                What Is Your Story?
                            </v-card-title>
                            <v-card-text>
                                The best wedding films tell a great story. We will work with you
                                before your big day so that we can get to know you. We feel that
                                knowing you will help us tell your story.
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card class="pa-4 indigo darken-3 mt-12 mb-12">
                    <v-row align="center" justify="center" class="white--text">
                        <v-col cols="5" class="text-center">
                            <v-card-title class="justify-center">
                                High-Quality Films. Every Time.
                            </v-card-title>
                            <v-card-text>
                                This is one of the biggest days of your life and we understand
                                that. We will do whatever it takes to make sure that you, your friends, and your family will cherish your film forever.
                            </v-card-text>
                        </v-col>
                        <v-col cols="5 offset-1" class="text-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/cp8CxGDpZTk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </v-col>
                    </v-row>
                </v-card>
            </v-container>
        </v-content>
    </CustomParallax>
</template>

<style scoped>
.image {
    background-image: url("../assets/Ring.jpeg");
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