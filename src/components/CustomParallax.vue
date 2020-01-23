<template>
    <div class="parallax">
        <slot></slot>
    </div>
</template>

<style>
.parallax {
    height: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    padding-top: 10%;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class CustomParallax extends Vue {
}

</script>