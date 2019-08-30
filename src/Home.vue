<template>
  <div id="site">
    <div class="column-side">
      <div class="nav-container" id="shop-etsy">
        <h2>Etsy</h2>
      </div>
      <div class="nav-container" id="support">
        <h2>Support</h2>
      </div>
    </div>
    <div class="column-center">
      <div id="branding">
        <img id="logo" src="/src/assets/images/stagpathlogo-transparency.png">
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
          <h2>Commisions: businessjen1@gmail.com</h2>
        </div>
      </div>
    </div>
    <div class="column-side">
      <div class="nav-container" id="shop-redbubble">
        <h2>Redbubble</h2>
      </div>
      <div class="nav-container" id="about">
        <h2>About</h2>
      </div>
    </div>
  </div>
</template>