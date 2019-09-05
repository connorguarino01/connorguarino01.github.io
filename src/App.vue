<template>
  <div id="site">
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/fonts/vineritc.ttf'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>