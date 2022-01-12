<template>
  <div class="home">
    <img class="logo" width="100" src="logo.png" alt="">
    <h1>
      {{ count }}
    </h1>
    <button class="btn" @click="$store.commit('INCREMENT')">INCREMENT</button>
    <button @click="joinGame(69)">Join game</button>
    <button @click="login()">login</button>
    <button @click="register()">register</button>
    <button @click="logout()">logout</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'home',
  computed: {
    ...mapState({
      count: state => state.count
    }),
  },
  mounted() {
    window.Echo.channel('channel')
      .listen('Hello', (e) => {
        console.log(e);
      });
  },
  methods: {
    joinGame(id) {
      // redirect to /game/join
      axios.post('/api/lobby/join',{
        id: id,
        numberOfPlayers: 2,
      }).then(response => {
        this.$router.push('/game/'+id);
      });
    },
    login() {
      axios.post('/api/login',
        {
          email: 'leonlav77@gmail.com',
          password: 'password',
        }
      ).then(response => {
        console.log(response.data);
      });
    },
    register() {
      axios.post('/api/register',{
          name: 'username',
          email: 'leonlav77@gmail.com',
          password: 'password',
          password_confirmation: 'password'
        }).then(response => {
          console.log(response.data);
      });
    },
    logout() {
      axios.post('/api/logout').then(response => {
        console.log(response.data);
      });
    },
  }
}
</script>
