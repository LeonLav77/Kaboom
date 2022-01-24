<template>
  <div class="containe">
      <div class="container">
        <div class="errorField">
          {{ error }}
        </div>
        <div v-for="(player, index) in players" @click="logg()" :key="player.id" :class="'player'+index">
            <PlayerIcon v-if="player" :player="player" :index="index" />
        </div>
        <PlayerField  v-for="(player, index) in players" :player="player" :class="'cardField'+index" :index="index" :key="'player'+player.id" />
        <Deck :side="'left'" v-on:draw="draw" />
        <Deck :side="'right'" v-on:draw="draw" />
    </div>
    <CardModal v-if="showModal" v-on:closeModal="closeModal" v-on:throwCard="throwCard" :image="this.drawnCard" />
  </div>
</template>

<script>
export default {
    components: {
        PlayerIcon: () => import('../Components/PlayerIcon.vue'),
        Card: () => import('../Components/Card.vue'),
        PlayerField: () => import('../Components/PlayerField.vue'),
        Deck: () => import('../Components/Deck.vue'),
        CardModal: () => import('../Components/CardModal.vue'),
    },
    data: () => ({
      players: [],
      number_of_players: 0,
      me: null,
      hand : [],
      card:{
        value: '',
        color: '',
        suit: '',
        backsides: 'http://127.0.0.1:8000/storage/Cards/card_backsides.png',
        frontside: '',
      },
      showModal: false,
      drawnCard: {
        value: '',
        color: '',
        suit: '',
        backsides: '',
        frontside: '',
      },
      error: '',
      myTurn: false,
    }),
    mounted() {
      window.Echo.leave();
      axios.post('/api/userInfo')
        .then(response => {
          this.me = response.data;
            // console.log(this.me);
        var gameUserChannel = window.Echo.private('game.'+this.$route.params.id+'_user.'+this.me.id);
        gameUserChannel.listen('DealCards', (e) => {
              // console.log(e.hand);
              this.hand = e.hand;
            });
        var mainchannel = window.Echo.join('game.'+this.$route.params.id);
        mainchannel.here((users) => {
          axios.get('/api/turn?game_id='+this.$route.params.id)
            .then(response => {
              console.log(response.data);
              if(response.data == this.me.id) {
                this.error = "Your turn";
                this.myTurn = true;
              }else{
                this.error = "Opponents turn";
                this.myTurn = false;
              }
            });
          this.dealCards();
          users.forEach(user => {
            user.hand = [
              this.card,
              this.card,
              this.card,
              this.card,
            ];
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
        var gameMovesChannel = window.Echo.channel('moves.'+this.$route.params.id);
        gameMovesChannel.listen('Turn', (e) => {
          console.log(e);
        });
        gameMovesChannel.listen('ThrowCard', (e) => {
          console.log(e);
        });
        });
},
methods: {
  dealCards(){
    axios.post('/api/dealCards', {
      game_id: this.$route.params.id
    })
  },
  logg(){
    for(var i = 0; i < this.players.length; i++){
      if(this.players[i].id == this.me.id){
        console.log(this.players[i].hand);
      }
    }
    console.log(this.players);
  },
          draw(){
            axios.post('/api/draw', {
                game_id: this.$route.params.id
            })
            .then(response => {
                if(this.myTurn){
                  this.displayModal(response.data);
                  // console.log(response.data[0]); 
                  this.drawnCard = response.data[0];
                }else{
                  // console.log(response.data);
                }
            });
        },
        displayModal() {
            this.showModal = true;
        },
        closeModal(){
            this.showModal = false;
        },
        throwCard(){
            axios.post('/api/throwCard', {
                game_id: this.$route.params.id,
                card: this.drawnCard
            })
            .then(response => {
                console.log(response.data);
                this.drawnCard = response.data[0];
            });
        },
        takeCard(){
            axios.post('/api/takeCard', {
                game_id: this.$route.params.id,
                card: this.drawnCard
            })
            .then(response => {
                console.log(response.data);
                this.drawnCard = response.data;
            });
        },
  }
}
</script>

<style>
.containe{
  width: 100;
  height: 100;
}
.container {  
  height: 100vh;
  width: 100vw;
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "errorField . player1 . ."
    ". cardField1 cardField1 cardField1 ."
    ". cardField1 cardField1 cardField1 ."
    ". playField playField playField ."
    ". playField playField playField ."
    ". cardField0 cardField0 cardField0 ."
    ". cardField0 cardField0 cardField0 ."
    ". . player0 . ."; 
}
.player0 {
  grid-area: player0; 
  justify-items: center;
  align-items: center;
}
.player1 { grid-area: player1;
  justify-items: center;
  align-items: center;
}
.cardField0 { 
  grid-area: cardField0; 
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "player0card6 player0card0 player0card1 player0card5"
    "player0card7 player0card2 player0card3 player0card4"; 
}
.cardField1 { 
  grid-area: cardField1; 
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "player1card6 player1card0 player1card1 player1card5"
    "player1card7 player1card2 player1card3 player1card4"; 
}


.player0card0 { grid-area: player0card0; }
.player0card1 { grid-area: player0card1; }
.player0card2 { grid-area: player0card2; }
.player0card3 { grid-area: player0card3; }
.player0card4 { grid-area: player0card4; }
.player0card5 { grid-area: player0card5; }
.player0card6 { grid-area: player0card6; }
.player0card7 { grid-area: player0card7; }

.player1card0 { grid-area: player1card0; }
.player1card1 { grid-area: player1card1; }
.player1card2 { grid-area: player1card2; }
.player1card3 { grid-area: player1card3; }
.player1card4 { grid-area: player1card4; }
.player1card5 { grid-area: player1card5; }
.player1card6 { grid-area: player1card6; }
.player1card7 { grid-area: player1card7; }

.errorField { grid-area: errorField; }

.playerIcon {
  justify-items: center;
  align-items: center;
  }
  .playField {
    grid-area: playField; 
    display: flex;
    align-items: center;
  }
  .left {
    justify-content: left;
  }
  .right {
    justify-content: right;
  }
</style>