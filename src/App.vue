<template>
  <v-app>
    <HeaderBar/>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderBar from './components/HeaderBar.vue';

export default Vue.extend({
  name: 'App',

  components: {
    HeaderBar,
  },

  data: () => ({
    //
  }),
});
</script>
