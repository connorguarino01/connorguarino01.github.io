<template>
    <CustomParallax class="image">
        <v-content>
            <v-container fluid>
                <v-card class="transparent elevation-0">
                    <v-row align="center" justify="center" class="pb-12">
                        <v-col class="text-center">
                            <v-card-title class="white--text justify-center display-1">
                                Pricing
                            </v-card-title>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card class="pa-4 mb-12">
                    <v-row align="center" justify="center" class="white py-4">
                        <v-col class="text-center">
                            <v-card-title>
                                Our highlight films start at $2,500. Most of our couples spend between $2,500 to $3,500. Please contact us to set up a custom package!
                            </v-card-title>
                        </v-col>
                    </v-row>
                </v-card>
            </v-container>
        </v-content>
    </CustomParallax>
</template>

<style scoped>
.image {
    background-image: url("../assets/Pricing.jpg");
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