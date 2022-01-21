<template>
  <div class="home">
    <button class="btn" @click="$store.commit('INCREMENT')">INCREMENT</button>
    <button @click="joinGame(71)">Join game</button>
    <button @click="login()">login</button>
    <button @click="register()">register</button>
    <button @click="login2()">login2</button>
    <button @click="register2()">register2</button>
    <button @click="login3()">login2</button>
    <button @click="register3()">register2</button>
    <button @click="logout()">logout</button>
    <button @click="Test()">Test</button>
    <button @click="Test2()">2Player</button>
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
    // disconnect from all channels
      window.Echo.leave();
      window.Echo.channel('channel')
      .listen('Hello', (e) => {
        console.log(e);
      });
  },
  methods: {
    Test() {
        this.$router.push('/test');
    },
      Test2() {
        this.$router.push('/2PlayerTest');
    },
    joinGame() {
      // redirect to /game/join
      axios.post('/api/lobby/join',{
        numberOfPlayers: 2,
      }).then(response => {
        this.$router.push('/lobby/'+response.data.id);
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
    login2() {
      axios.post('/api/login',
        {
          email: 'leonlav7@gmail.com',
          password: 'password',
        }
      ).then(response => {
        console.log(response.data);
      });
    },
    login3() {
      axios.post('/api/login',
        {
          email: 'leonlav@gmail.com',
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
    register2() {
      axios.post('/api/register',{
          name: 'usernam',
          email: 'leonlav7@gmail.com',
          password: 'password',
          password_confirmation: 'password'
        }).then(response => {
          console.log(response.data);
      });
    },
    register3() {
      axios.post('/api/register',{
          name: 'userna',
          email: 'leonlav@gmail.com',
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
