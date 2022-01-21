<template>
  <div class="Card">
    <img @click="revealCard()" :src="card.backsides" width="100" height="150" :id="index" />
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
  },
  methods: {
    revealCard(){
      axios.post('/api/revealCard', {
        game_id: this.$route.params.id,
        card_id: this.index
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
