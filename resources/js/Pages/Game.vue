<template>
    <div class="wrapper">
        <!-- <PlayerIcon v-for="(player, index) in players" :player="player" :key="index" /> -->
  <component
    v-for="(component, index) in components"
    :key="index"
    :player="component.player"
    :is="component"
  />
  <button @click="add()">Add</button>
    </div>
</template>

<script>
const Comp = {
 template: '<div>Hello world</div>'
}
// import PlayerIcon from '../Components/PlayerIcon.vue';

export default {
    components: {
        PlayerIcon: () => import('../Components/PlayerIcon.vue')
    },
    data: () => ({
        players: [],
        components: [Comp],
        player: {
            id: '',
            name: '',
        },

    }),
    mounted() {
        axios.get('/api/lobby/users/'+this.$route.params.id).then(response => {
            console.log(response.data)
            for (let i = 0; i < response.data.length; i++) {
                this.players.push(response.data[i].user)
            }
        });
        
    },
    methods: {
        add() {
            // add a player icon and pass a prop to it
            this.components.push({
                player: this.player,
                template: '<PlayerIcon :player="player" />'
            });
            // this.components.push(PlayerIcon);
        }
    }

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