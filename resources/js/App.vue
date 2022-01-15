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
     disableStats: true,
     authorizer: (channel, options) => {
        return {
            authorize: (socketId, callback) => {
                axios.post('/api/broadcasting/auth', {
                    socket_id: socketId,
                    channel_name: channel.name
                })
                .then(response => {
                    callback(false, response.data);
                })
                .catch(error => {
                    callback(true, error);
                });
            }
        };
    },
 });
export default {
  name: 'app',
  components: {
    Navbar: () => import('./Components/Navbar.vue')
  }
}
</script>

