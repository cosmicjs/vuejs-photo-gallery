<template>
  <div>
    <div id="main">
      <app-header></app-header>
      <thumbs></thumbs>
      <app-footer></app-footer>
    </div>
    <viewer></viewer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import Thumbs from './components/Thumbs'
import Viewer from './components/Viewer'
import Vue from 'vue';
import Cosmic from 'cosmicjs';
import * as Config from './config';
import {EventBus} from './event_bus';

const bucket = { slug: Config.bucket };

export default {
  name: 'app',
  components: {
    AppFooter,
    AppHeader,
    Thumbs,
    Viewer
  },
  created() {
    Cosmic.getObjectType({ bucket }, { type_slug: 'globals' }, (err, res) => {
      EventBus.$emit('global_loaded', res.objects.all[0]);
      console.log(res.objects.all[0]);
    });
  },
}
</script>
