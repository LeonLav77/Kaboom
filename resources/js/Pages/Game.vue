<template>
  <div class="containe">
      <div class="container">
        <div v-for="(player, index) in players" @click="logg()" :key="player.id" :class="'player'+index">
            <PlayerIcon v-if="player" :player="player" :index="index" />
        </div>
        <!-- <div v-for="(player, index) in players" :index="index" :card="player.hand.card" :key="index">
          <img :src="card.backsides" width="100" height="150" :id="index" />
        </div> -->
        <Card v-for="(card, index) in hand" :class="'player1card'+index" :card="card" :index="index" :key="index" />
        <Card v-for="(card, index) in hand" :class="'player2card'+index" :card="card" :index="index" :key="index+10" />
    </div>
  </div>
</template>

<script>
export default {
    components: {
        PlayerIcon: () => import('../Components/PlayerIcon.vue'),
        Card: () => import('../Components/Card.vue'),
        PlayerField: () => import('../Components/PlayerField.vue')
    },
    data: () => ({
      players: [],
      number_of_players: 0,
      me: null,
      hand : [],
      player: {
        name: '',
        id: '',
        cards: [],
        photo: '',
      },
      card:{
        value: '',
        color: '',
        suit: '',
        backsides: 'http://127.0.0.1:8000/storage/Cards/card_backsides.png',
        frontside: '',
      }
    }),
    mounted() {
      axios.post('/api/userInfo')
        .then(response => {
          this.me = response.data;
            // console.log(this.me);
            var gameUserChannel = window.Echo.private('game.'+this.$route.params.id+'_user.'+this.me.id);
            gameUserChannel.listen('DealCards', (e) => {
              // console.log(e.hand);
              this.hand = e.hand;
            });
      window.Echo.leave();
        var mainchannel = window.Echo.join('game.'+this.$route.params.id);
        mainchannel.here((users) => {
          this.dealCards();
          users.forEach(user => {
            // console.log(user);
            user.hand = [
              this.card,
              this.card,
              this.card,
              this.card,
            ];
            // this.players[user.id].push(user);
            this.players.push(user);
            });
        });
        mainchannel.joining((user) => {
            user.hand = [
              this.card,
              this.card,
              this.card,
              this.card,
            ];
            // this.players[user.id].push(user);
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
          // console.log(e);
        });
        });
},
methods: {
  dealCards(){
    axios.post('/api/dealCards', {
      game_id: this.$route.params.id
    })
    .then(response => {
      // console.log(response.data);
    });
  },
  logg(){
    // find user by id in players array
    for(var i = 0; i < this.players.length; i++){
      if(this.players[i].id == this.me.id){
        console.log(this.players[i].hand);
      }
    }
    console.log(this.players);
  }
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
}

.player0 { grid-area: 8 / 4 / 10 / 6; }

.player1 { grid-area: 1 / 4 / 3 / 6; }

.player1card0 { grid-area: 6 / 4 / 7 / 5; }

.player1card1 { grid-area: 6 / 5 / 7 / 6; }

.player1card2 { grid-area: 7 / 4 / 8 / 5; }

.player1card3 { grid-area: 7 / 5 / 8 / 6; }

.player1card4 { grid-area: 7 / 6 / 8 / 7; }

.player1card5 { grid-area: 6 / 6 / 7 / 7; }

.player1card6 { grid-area: 6 / 3 / 7 / 4; }

.player1card7 { grid-area: 7 / 3 / 8 / 4; }

.player2card0 { grid-area: 4 / 5 / 5 / 6; }

.player2card1 { grid-area: 4 / 4 / 5 / 5; }

.player2card2 { grid-area: 3 / 5 / 4 / 6; }

.player2card3 { grid-area: 3 / 4 / 4 / 5; }

.player2card4 { grid-area: 3 / 3 / 4 / 4; }

.player2card5 { grid-area: 4 / 3 / 5 / 4; }

.player2card6 { grid-area: 4 / 6 / 5 / 7; }

.player2card7 { grid-area: 3 / 6 / 4 / 7; }

.playerField1 { grid-area: 6 / 3 / 10 / 7; }

.playerField2 { grid-area: 1 / 3 / 5 / 7; }

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