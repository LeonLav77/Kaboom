require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router';

import router from './Router/index'
import store from './Store/index';
import App from './App.vue'
import Lightbox from 'vue-pure-lightbox'
Vue.use(VueRouter);
Vue.use(Lightbox);
const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App }
});