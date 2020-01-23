<template>
    <CustomParallax class="image">
        <v-content>
            <v-container fluid>
                <v-card class="transparent elevation-0">
                    <v-row align="center" justify="center" class="pb-12">
                        <v-col class="text-center">
                            <v-card-title class="white--text justify-center display-1">
                                Contact Us
                            </v-card-title>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card class="pa-4 mb-12">
                    <v-row align="center" justify="center" class="white py-4">
                        <v-col cols="4">
                            <v-card-title>
                                <v-icon fab>
                                    mdi-email
                                </v-icon>
                                Email
                            </v-card-title>
                            <v-card-text>
                                ThesingFamilyFilms@gmail.com
                            </v-card-text>
                        </v-col>
                        <v-col cols="4">
                            <v-card-title>
                                <v-icon fab>
                                    mdi-phone
                                </v-icon>
                                Phone
                            </v-card-title>
                            <v-card-text>
                                614.426.3558
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
    background-image: url("../assets/Contact.png");
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