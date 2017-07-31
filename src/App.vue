<template>
<div>
  <div id="main">
    <app-header></app-header>
    <thumbs v-on:loaded="loadViewer"></thumbs>
    <app-footer></app-footer>
  </div>
  <viewer></viewer>
</div>
</template>

<script>
import Hello from './components/Hello'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import Thumbs from './components/Thumbs'
import Viewer from './components/Viewer'

export default {
  name: 'app',
  components: {
    Hello,
    AppFooter,
    AppHeader,
    Thumbs,
    Viewer
  },
  methods: {
    loadViewer: (data) => {
      console.log(data);
    }
  }
}
</script>
