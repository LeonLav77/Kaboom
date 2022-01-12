<template>
  <div class="playerIcon">
    <img :src="player.user.photo" :alt="player.user.name" />
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
