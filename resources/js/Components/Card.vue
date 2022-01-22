<template>
  <div class="Card">
    <div>
      <img @click="revealCard()" :src="card.backsides" width="100" height="150" :id="index" />
    </div>
  </div>
</template>
<script>
export default {
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
      // console.log(this.card);
      // console.log(this.index);
      axios.post('/api/revealCard', {
        game_id: this.$route.params.id,
        card_id: this.index,
        player_id: this.player_id,
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
};
</script>
