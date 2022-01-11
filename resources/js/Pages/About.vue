<template>
  <div class="about">
    <h2>
      Hello
      <!-- {{ count }} -->
    </h2>
    <button @click="newDBEntry()">
      New Entry
    </button>
    <button @click="getToken()">
      Register
    </button>
    <button @click="getUsers()">
      Get Users
    </button>
  </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  name: 'about',
  //   computed: {
  //   ...mapState({
  //     count: state => state.count
  //   }),
  // },
  methods: {
    newDBEntry() {
      axios.post('/api/new-entry')
        .then(response => {
          console.log(response.data);
        });
    },
    async getToken(){
      // await axios.get('/sanctum/csrf-cookie'); for csrf token
      await axios.post('/api/register',{
        name: "hoge",
        email: "hog@example.com",
        password: "password",
        password_confirmation: "password",
      });
    },
    getUsers() {
      axios.get('/api/users')
        .then(response => {
          console.log(response.data);
        });
    }
  }
  
}
</script>
