<template>
  <div class="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import './Styles/app.scss'
 import Echo from 'laravel-echo';

 window.Pusher = require('pusher-js');
 
 window.Echo = new Echo({
     broadcaster: 'pusher',
     key: process.env.MIX_PUSHER_APP_KEY,
     wsHost: process.env.MIX_PUSHER_APP_WS_HOST,
     wsPort: 6001,
     forceTLS: false,
     disableStats: true
 });
export default {
  name: 'app',
  components: {
    Navbar: () => import('./Components/Navbar.vue')
  }
}
</script>

