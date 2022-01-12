<template>
  <div class="playerIcon">
    <img :src="player.photo" :alt="player.name" />
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
  },
};
</script>
