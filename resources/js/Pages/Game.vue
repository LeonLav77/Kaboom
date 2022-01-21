<template>
  <div class="containe">
      <div class="container">
        <div class="player1">
            <PlayerIcon v-if="players[0]" :player="players[0]" :index="1" />
        </div>
        <div class="player1card1"></div>
        <div class="player1card2"></div>
        <div class="player1card3"></div>
        <div class="player1card4"></div>
        <div class="player1card5"></div>
        <div class="player1card6"></div>
        <div class="player1card7"></div>
        <div class="player1card8"></div>

        <div class="player2">
            <PlayerIcon v-if="players[1]" :player="players[1]" :index="1" />
        </div>
        <div class="player2card1"></div>
        <div class="player2card2"></div>
        <div class="player2card3"></div>
        <div class="player2card4"></div>
        <div class="player2card5"></div>
        <div class="player2card6"></div>
        <div class="player2card7"></div>
        <div class="player2card8"></div>
    </div>
      <div class="wrapper2">
        <Card v-for="(card, index) in hand" :card="card" :index="index+1" :key="index" />
      </div>
      <button @click="makeMove()">Make Move</button>
      <button @click="dealCards()">Deal Cards</button>
  </div>
</template>

<script>
export default {
    components: {
        PlayerIcon: () => import('../Components/PlayerIcon.vue'),
        Card: () => import('../Components/Card.vue')
    },
    data: () => ({
      players: [],
        number_of_players: 0,
        me: null,
        hand : [],
    }),
    mounted() {
      axios.post('/api/userInfo')
        .then(response => {
          this.me = response.data;
            console.log(this.me);
            var gameUserChannel = window.Echo.private('game.'+this.$route.params.id+'_user.'+this.me.id);
            gameUserChannel.listen('DealCards', (e) => {
              console.log(e.hand);
              this.hand = e.hand;
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
.containe{
  width: 100;
  height: 100;
}
.container {  
    height: 100vh;
    width: 100vw;
    display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . . player2 player2 . . ."
    ". . . player2 player2 . . ."
    ". . player2card5 player2card4 player2card3 player2card8 . ."
    ". . player2card6 player2card2 player2card1 player2card7 . ."
    ". . . . . . . ."
    ". . player1card7 player1card1 player1card2 player1card6 . ."
    ". . player1card8 player1card3 player1card4 player1card5 . ."
    ". . . player1 player1 . . ."
    ". . . player1 player1 . . .";
}

.player1 { grid-area: player1; }

.player2 { grid-area: player2; }

.player1card1 { grid-area: player1card1; }

.player1card2 { grid-area: player1card2; }

.player1card3 { grid-area: player1card3; }

.player1card4 { grid-area: player1card4; }

.player1card5 { grid-area: player1card5; }

.player1card6 { grid-area: player1card6; }

.player1card7 { grid-area: player1card7; }

.player1card8 { grid-area: player1card8; }

.player2card1 { grid-area: player2card1; }

.player2card2 { grid-area: player2card2; }

.player2card3 { grid-area: player2card3; }

.player2card4 { grid-area: player2card4; }

.player2card5 { grid-area: player2card5; }

.player2card6 { grid-area: player2card6; }

.player2card7 { grid-area: player2card7; }

.player2card8 { grid-area: player2card8; }

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