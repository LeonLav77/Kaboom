<template>
  <div class="home">
    <img class="logo" width="100" src="logo.png" alt="">
    <h1>
      {{ count }}
    </h1>
    <button class="btn" @click="$store.commit('INCREMENT')">INCREMENT</button>
    <button @click="joinGame()">Join game</button>
    <button @click="login()">login</button>
    <button @click="register()">register</button>
    <button @click="createLobby()">create Lobby</button>
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
    joinGame() {
      // redirect to /game/join
      axios.post('/api/game/join').then(response => {
        this.$router.push('/game');
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
    createLobby() {
      axios.post('/api/lobby/create').then(response => {
        console.log(response.data);
      });
    }
  }
}
</script>
