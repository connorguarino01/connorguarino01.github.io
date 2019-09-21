<template>
  <div id="site">
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
          <font-awesome-icon :icon="['fab','etsy']" />
          <font-awesome-icon :icon="['fab','facebook-f']" />
          <font-awesome-icon :icon="['fab','instagram']" />  
          <font-awesome-icon :icon="['fab','pinterest-p']" />
          <font-awesome-icon :icon="['fab','redbubble']" />
          <font-awesome-icon :icon="['fab','tumblr']" />        
        </div>
        <div class="social-row" id="email">
          <h3><span>Contact: businessjen1@gmail.com</span></h3>
          <button type="button" id="sub-button"><h3><span>Subscribe</span></h3></button>
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

.nav-container > a {
  min-width: 8rem;
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
}

#support > a {
  margin-left: var(--nav-hoffset);
  margin-top: var(--nav-voffset2);
}

#shop-redbubble > a {
  margin-right: var(--nav-hoffset);
  margin-top: var(--nav-voffset1);
}

#about > a {
  margin-right: var(--nav-hoffset);
  margin-top: var(--nav-voffset2);
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

#media > svg {
  width: 2rem;
  height: 2rem;
  padding: 0.25em;
  border-radius: 50%;
  background-color: var(--blackoverlay);
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

#sub-button {
  display: flex;
  position: relative;
  background: transparent;
  padding: 0.5em;
  font-weight: 400;
  font-size: 1em;
  margin-left: 0.5em;
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
