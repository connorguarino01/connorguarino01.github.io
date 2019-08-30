<template>
  <div id="site">
    <div id="intro">
      <div id="site-title">
        <h1>StagPath</h1>
      </div>
      <div id="site-logo">
        <img src="/src/assets/images/stagpathlogo-transparency.png">
      </div>
      <div class="nav-button button-left" id="nav-jewelry">
        <img class="nav-button-leaf" src="/src/assets/images/leaf.svg">
        <div class="nav-button-text button-text-left">
          <h2>Jewelry</h2>
        </div>
      </div>
      <div class="nav-button button-left" id="nav-centerpieces">
        <img class="nav-button-leaf" src="/src/assets/images/leaf.svg">
        <div class="nav-button-text button-text-left">
          <h2>Center</h2><h2>pieces</h2>
        </div>
      </div>
      <div class="nav-button button-right" id="nav-acrylic">
        <img class="nav-button-leaf img-flip" src="/src/assets/images/leaf.svg">
        <div class="nav-button-text button-text-right">
          <h2>Acrylic Pours</h2>
        </div>
      </div>
      <div class="nav-button button-right" id="nav-about">
        <img class="nav-button-leaf img-flip" src="/src/assets/images/leaf.svg">
        <div class="nav-button-text button-text-right">
          <h2>About</h2>
        </div>
      </div>
      <div id="social-container">
        <div class="social-icon" id="etsy">
          <font-awesome-icon :icon="['fab', 'etsy']"/>
          <img class="social-icon-acorn" src="/src/assets/images/acorn.svg">
        </div>
        <div class="social-icon" id="redbubble">
          <img id="redbubble-icon" src="/src/assets/images/redbubble.png">
          <img class="social-icon-acorn" src="/src/assets/images/acorn.svg">
        </div>
        <div class="social-icon" id="facebook">
          <font-awesome-icon :icon="['fab', 'facebook-f']"/>
          <img class="social-icon-acorn img-flip" src="/src/assets/images/acorn.svg">
        </div>
        <div class="social-icon" id="tumblr">
          <font-awesome-icon :icon="['fab', 'tumblr']"/>
          <img class="social-icon-acorn img-flip" src="/src/assets/images/acorn.svg">
        </div>
      </div>
      <div id="email">
        <h2>Commissions: email@email.com</h2>
      </div>
    </div>
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
#intro {
  display: flex;
  height: 100vh;
  width: 100%;
}

#site-title {
  display:flex;
  height: auto;
  width: auto;
  color: white;
  justify-content: center;
  margin: auto;
  font-size: 2em;
  text-shadow: 0 5px 5px black;
  z-index: 2;
}

#site-logo {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: auto;
  justify-content: center;
}

#site-logo > img {
  object-fit: contain;
  padding-bottom: 15vh;
  z-index: 1;
}

.nav-button {
  position: absolute;
  display: flex;
  height: 20%;
  width: 17.5%;
  /* background-color: rgba(0,0,0,0.7); */
  color: white;
  align-items: center;
}

.button-left {
  border-radius: 0 20px 20px 0;
}

.button-right {
  border-radius: 20px 0 0 20px;
}

.nav-button-text > h2 {
  position: relative;
  width: auto;
  max-width: 48%;
  height: auto;
}

@media only screen and (max-width: 1677px) {
  #nav-centerpieces > .nav-button-text {
    flex-direction: column;
  }
}

#nav-centerpieces > div > h2:nth-child(2) {
  margin-left: 0.1em;
}

#nav-jewelry {
  top: 20%;
  left: 0;
}

#nav-centerpieces {
  bottom: 20%;
  left: 0;
}

#nav-acrylic {
  top: 20%;
  right: 0;
}

#nav-about {
  bottom: 20%;
  right: 0;
}

.nav-button-text {
  display: flex;
  position: relative;
  align-items: center;
  text-align: center;
  width: 52.5%;
  height: 100%;
  justify-content: center;
}

.button-text-left {
  padding-left: 12.5%;
  padding-right: 35%;
}

.button-text-right {
  padding-right: 12.5%;
  padding-left: 35%;
}

.nav-button-leaf {
  position: absolute;
  height: auto;
  width: 100%;
  object-fit: contain;
}

.img-flip {
  transform: scaleX(-1);
}

#social-container {
  display: flex;
  position: absolute;
  width: 60%;
  height: 4em;
  bottom: 10%;
  margin-left: 20%;
  margin-right: 20%;
  justify-content: space-evenly;
  z-index: 2;
}

.social-icon {
  position: relative;
  display: flex;
  height: 4em;
  width: 4em;
  border-radius: 50%;
  // background-color: rgba(0,0,0,0.7);
  z-index: 1;
}

#etsy > svg {
  height: 60%;
  width: 60%;
  margin: auto;
  color: white;
  z-index: 2;
}

.social-icon-acorn {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

#redbubble-icon {
  height: 100%;
  width: 100%;
  margin: auto;
  z-index: 2;
}

#facebook > svg {
  height: 60%;
  width: 60%;
  margin: auto;
  color: white;
  z-index: 2;
}

#tumblr > svg {
  height: 60%;
  width: 60%;
  margin: auto;
  color: white;
  z-index: 2;
}

#email {
  position: absolute;
  display: flex;
  color: white;
  bottom: 2.5%;
  width: 100%;
  height: auto;
  z-index: 2;
}

#email > h2 {
  background-color: rgba(0,0,0,0.7);
  border-radius: 10px;
  padding-left: 5px;
  padding-right: 5px;
  margin: auto;
}

#site {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-image: url("/src/assets/images/forest-aerial.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

body {
  margin: 0;
}

h1 {
  font-family: "VinerHand";
  margin-block-start: 0;
  margin-block-end: 0;
}

h2 { 
  font-family: "VinerHand";
  margin-block-start: 0;
  margin-block-end: 0;
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
  src: url('/src/assets/fonts/vineritc.ttf');
}
</style>
