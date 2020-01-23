<template>
    <v-app-bar absolute app elevation="0" color="transparent">
        <v-toolbar-title>
            <img id="header-logo" src="../assets/Thesing Family Films Logo.png" alt="Thesing Family Films"/>
        </v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
            <v-btn text to="/" class="white--text">Home</v-btn>
            <v-btn text to="/about" class="white--text">About</v-btn>
            <v-btn text to="/films" class="white--text">Our Films</v-btn>
            <v-btn text to="/pricing" class="white--text">Pricing</v-btn>
            <v-btn text to="/contact" class="white--text">Contact Us</v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<style>
#header-logo {
  display: flex;
  height: 60px;
  object-fit: contain;
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class HeaderBar extends Vue {
}

</script>