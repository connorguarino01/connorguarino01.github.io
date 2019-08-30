<template>
  <div id="site">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
.column-side {
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
}

.column-center {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
}

.nav-container {
  display: flex;
  width: 100%;
  height: 50%;
}

#branding {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
}

#logo {
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
}

#social {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
}

.social-row {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
  color: white;
}

#site {
  background-color: var(--stag-green);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
}

h1 {
  font-family: "VinerHand";
  margin-block-start: 0;
  margin-block-end: 0;
  color: white;
}

h2 { 
  font-family: "VinerHand";
  margin-block-start: 0;
  margin-block-end: 0;
  color: white;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

:root {
    --stag-beige: #ced1b2;
    --stag-lightbeige: #EEF2CD;
    --stag-green: #262e09;
    --blackoverlay: rgba(0,0,0,0.3);
}

@font-face {
  font-family: 'VinerHand';
  src: url('/fonts/vineritc.ttf');
}
</style>
