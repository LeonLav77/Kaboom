<template>
  <div class="playerIcon">
    <img :src="player.photo" :alt="player.name" :id="'pos'+index" />
  </div>
</template>
<script>
export default {
  name: 'playerIcon',
  props: {
    player: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

};
</script>
