<template>
    <div class="wrapper">
        <!-- 4 squares in the middle where the players photo will be -->
        <PlayerIcon v-for="(player, index) in players" :player="player" :key="index" />
    </div>
</template>

<script>
export default {
    components: {
        PlayerIcon: () => import('../Components/PlayerIcon.vue')
    },
    data: () => ({
        players: [],
    }),
    mounted() {
        axios.get('/api/game/players').then(response => {
            console.log(response.data)
            this.players = response.data;
        });
    },
}
</script>

<style scoped>
    .wrapper {
        width:300px;
        height:auto;
        min-height: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
  }
    .playerIcon {
        display: flex;
        margin: 10px;
        flex-basis: calc(50% - 40px);  
        justify-content: center;
        flex-direction: column;
    }

</style>