<template>
  <div>
    <div id="main">
      <app-header></app-header>
      <thumbs :bus="bus"></thumbs>
      <app-footer></app-footer>
    </div>
    <viewer :bus="bus"></viewer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import Thumbs from './components/Thumbs'
import Viewer from './components/Viewer'
import Vue from 'vue';

export default {
  name: 'app',
  props: {
    image: {
      default: 'dsasd'
    },
    busObj: {
      default: () => {
        return new Vue();
      }
    }
  },
  components: {
    AppFooter,
    AppHeader,
    Thumbs,
    Viewer
  },
  data: function() {
    return {
      bus: this.busObj
    }
  }
}
</script>
