<template>
  <div id="site">
    <div id="submodal" v-if="submodalstatus">
      <div id="submodal-wrapper">
        <div id="submodal-header">
          <h2>Subscribe</h2>
          <button type="button" id="sub-button-close" v-on:click="submodalstatus = false">
            <font-awesome-icon :icon="['fas','times']" />    
          </button>
        </div>
        <submodal v-if="submodalstatus"/>
      </div>
    </div>
    <img id="site-background" src="./assets/images/home-background - ps2.jpg">
    <div class="column-side">
      <div class="nav-container left" id="shop-etsy">
        <router-link to="/etsy"><h2><span>Etsy</span></h2></router-link>
      </div>
      <div class="nav-container left" id="support">
        <router-link to="/support"><h2><span>Support</span></h2></router-link>
      </div>
    </div>
    <div class="column-center">
      <div id="branding">
        <div id="branding-wrapper">
          <img id="logo" src="/src/assets/images/stagpathlogo-transparency4.png">
          <div id="site-title">
            <h1>StagPath</h1>
          </div>
        </div>
      </div>
      <div id="social">
        <div class="social-row" id="media">
          <a href="https://www.etsy.com/shop/StagPath" target="_blank">
            <font-awesome-icon :icon="['fab','etsy']" />
          </a>
          <a href="https://www.facebook.com/StagPath/" target="_blank">
            <font-awesome-icon :icon="['fab','facebook-f']" />
          </a>
          <a href="https://www.instagram.com/stagpath/" target="_blank">
            <font-awesome-icon :icon="['fab','instagram']" />
          </a>
          <a href="https://www.pinterest.com/stagpath/" target="_blank">  
            <font-awesome-icon :icon="['fab','pinterest-p']" />
          </a>
          <a href="https://www.redbubble.com/people/StagPath" target="_blank">
            <font-awesome-icon :icon="['fab','redbubble']" />
          </a>
          <a href="https://www.tumblr.com/blog/stagpathcreates/" target="_blank">
            <font-awesome-icon :icon="['fab','tumblr']" />
          </a>        
        </div>
        <div class="social-row" id="email">
          <a href="mailto:businessjen1@gmail.com"> <h3><span>Contact: businessjen1@gmail.com</span></h3> </a>
          <button id="sub-button-open" v-on:click="submodalstatus = true"><h3><span>Subscribe</span></h3></button>
        </div>
      </div>
    </div>
    <div class="column-side">
      <div class="nav-container right" id="shop-redbubble">
        <router-link to="/redbubble"><h2><span>Redbubble</span></h2></router-link>
      </div>
      <div class="nav-container right" id="about">
        <router-link to="/about"><h2><span>About</span></h2></router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.column-side {
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
}

.column-center {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 40%;
  height: 100%;
}

.nav-container {
  display: flex;
  width: 100%;
  height: 50%;
}

.nav-container > a > h2 > span:hover {
  background-color: white;
  color: var(--stag-green);
}

.right {
  justify-content: flex-end;
}

.left { 
  justify-content: flex-start;
}

#shop-etsy > a {
  margin-left: var(--nav-hoffset);
  margin-top: var(--nav-voffset1);
  margin-bottom: auto;
  margin-right: auto;
}

#support > a {
  margin-left: var(--nav-hoffset);
  margin-top: var(--nav-voffset2);
  margin-right: auto;
  margin-bottom: auto;
}

#shop-redbubble > a {
  margin-right: var(--nav-hoffset);
  margin-top: var(--nav-voffset1);
  margin-left: auto;
  margin-bottom: auto;
}

#about > a {
  margin-right: var(--nav-hoffset);
  margin-top: var(--nav-voffset2);
  margin-left: auto;
  margin-bottom: auto;
}

#branding {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: center;
}

#branding-wrapper {
  position: relative;
  display: flex;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  align-items: center;
}

#site-title {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  margin: auto;
}

#site-title > h1 {
  margin-top: 50%;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
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

#media {
  display: flex;
  width: 100%;
  font-size: 2em;
  justify-content: space-evenly;
}

#media > a > svg {
  width: 2rem;
  height: 2rem;
  padding: 0.25em;
  border-radius: 50%;
  background-color: var(--blackoverlay);
  color: white;
}

#media > a > svg:hover {
  background-color: white;
  color: var(--stag-green);
}

.social-row {
  display: flex;
  flex-direction: row;
  width: auto;
  height: 50%;
  color: white;
  margin: auto;
  align-items: center;
}

#email > a > h3 > span:hover {
  background-color: white;
  color: var(--stag-green);
}

#submodal {
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: var(--blackoverlay);
  color: white;
  justify-content: center;
}

#submodal-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  padding: 1.5em;
  background-color: var(--stag-green);
  border-radius: 2em;
  border-width: 0.25em;
  border-color: white;
  border-style: dashed;
}

#submodal-header {
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  border-style: dashed;
  border-bottom-width: 0.25em;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-color: white;
}

#submodal-header > h2 {
  display: inline-block;
  position: relative;
  width: 90%;
  height: auto;
}

#sub-button-close {
  display: inline-block;
  position: relative;
  width: 10%;
  height: 60%;
  margin-bottom: auto;
  background-color: transparent;
  color: white;
}

#sub-button-close > svg {
  font-size: 2rem;
}

#sub-button-open {
  display: flex;
  position: relative;
  background: transparent;
  padding: 0.5em;
  font-weight: 400;
  font-size: 1em;
  margin-left: 0.5em;
}

#sub-button-open > h3 > span:hover {
  background-color:white;
  color: var(--stag-green);
}

#site {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  font-family: 'VinerHand','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow: hidden;
}

#site-background {
  position: absolute;
  z-index: -99;
  display: flex;
  top: 0;
  left: 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
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
  font-size: 2em;
}

h3 { 
  font-family: "VinerHand";
  margin-block-start: 0;
  margin-block-end: 0;
  color: white;
  font-size: 1.5em;
  font-weight: 400;
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
  text-decoration: none;
}

button {
  padding: 0;
  border: 0;
}

span {
  background-color: var(--blackoverlay);
  padding: 0.125em;
  border-radius: 0.5em;
}

:root {
    --stag-beige: #ced1b2;
    --stag-lightbeige: #EEF2CD;
    --stag-green: #262e09;
    --blackoverlay: rgba(0,0,0,0.55);
    --nav-hoffset: 35%;
    --nav-voffset1: 32.5%;
    --nav-voffset2: 40%;
}

@font-face {
  font-family: 'VinerHand';
  src: url('./assets/fonts/vineritc.ttf') format('truetype');
  src: url('/dist/fonts/vineritc.ttf') format('truetype');
}
</style>

<script>
export default {
  data: function() {
    return {
      submodalstatus: false
    }
  }
}
</script>