<template>
  <div class="container">
      <div>
          Welcome to the game
                  <PlayerIcon v-for="(player, index) in players" :player="player" :key="index" />

      </div>
      <button @click="makeMove()">Make Move</button>
      <button @click="dealCards()">Deal Cards</button>
  </div>
</template>

<script>
export default {
    components: {
        PlayerIcon: () => import('../Components/PlayerIcon.vue'),
    },
    data: () => ({
      players: [],
        number_of_players: 0,
        me: null,
    }),
    mounted() {
      axios.post('/api/userInfo')
        .then(response => {
          this.me = response.data;
            console.log(this.me);
            var gameUserChannel = window.Echo.private('game.'+this.$route.params.id+'_user.'+this.me.id);
            // 'game.' . $this->game_id . '_user.' . $this->user_id
            gameUserChannel.listen('DealCards', (e) => {
              console.log(e);
            });
      window.Echo.leave();
        var mainchannel = window.Echo.join('game.'+this.$route.params.id);
        mainchannel.here((users) => {
          this.dealCards();
          users.forEach(user => {
            this.players.push(user);
            });
        });
        mainchannel.joining((user) => {
            this.players.push(user);
          });
        mainchannel.leaving((user) => {
          this.players.splice(this.players.indexOf(user), 1);
        });
        mainchannel.error((err) => {
          console.log(err);
        });
        // subscribe to gameMoves channel
        var gameMovesChannel = window.Echo.channel('moves.'+this.$route.params.id);
        gameMovesChannel.listen('Move', (e) => {
          console.log(e);
        });
        // subscribe to game.{game_id}_user.{$user_id} channel

        });
},
methods: {
  makeMove(){
    axios.post('/api/makeMove', {
      game_id: this.$route.params.id
    })
    .then(response => {
      console.log(response.data);
    });
  },
  dealCards(){
    axios.post('/api/dealCards', {
      game_id: this.$route.params.id
    })
    .then(response => {
      console.log(response.data);
    });
  },
}
}
</script>

<style scoped>
    .wrapper {
      margin: 20px auto;
        width:400px;
        height:400px;
        display:grid;
        grid-template-columns: 200px 200px;
        grid-row: auto auto;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
  }
    .playerIcon {
        background-color:#333;
        padding:20px;
        border-radius:10px;
        color:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:40px;
        font-family:sans-serif;
    }
</style>