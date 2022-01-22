<template>
  <div class="Card">
    <div v-if="this.revealedCard[0] == null">
      <img @click="revealCard()" :src="card.backsides" width="100" height="150" :id="index" />
    </div>
    <div v-else>
      <img :src="revealedCard[0].frontside" width="100" height="150" :id="index" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      revealedCard: [],
      countDown : 3

    }
  },
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    player_id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    revealCard(){
      axios.post('/api/revealCard', {
        game_id: this.$route.params.id,
        card_id: this.index,
        player_id: this.player_id,
      })
      .then(response => {
        if(typeof response.data == 'string'){
          console.log(response.data);
        }else{
          this.revealedCard.push(response.data);
          this.countDownTimer();
        }
      })
      .catch(error => {
        console.log(error);
      });
    },
    countDownTimer() {
        if(this.countDown > 0) {
            setTimeout(() => {
                this.countDown -= 1
                this.countDownTimer()
            }, 1000)
        }else{
          this.revealedCard = [];
          console.log('time is up');
        }
    },  
  }
};
</script>
