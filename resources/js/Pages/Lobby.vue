<template>
    <div class="wrapper">
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
            // window.Echo.channel('lobby'+this.$route.params.id)
            //     .listen('UserJoinedLobby', (e) => {
            //     console.log(e.user);
            //     this.players.push(e.user);
            // });
            // window.Echo.channel('lobby'+this.$route.params.id)
            //     .listen('UserLeavingLobby', (e) => {
            //     console.log(e);
            //     // this.players.push(e.user);
            // });
            // window.Echo.private('lobby'+this.$route.params.id)
            //     .listen('UserJoinedLobby', (e) => {
            //     console.log(e);
            //     this.$router.push('/game/'+e.game.id);
            // });
            window.Echo.join('lobby.'+this.$route.params.id).here((users) => {
                // console.log(users);
                // this.players = users;
            }).joining((user) => {
                console.log(user);
                this.players.push(user);
            }).leaving((user) => {
                console.log(user);
                this.players.splice(this.players.indexOf(user), 1);
            }).error((err) => {
                console.log(err);
            });
        axios.get('/api/lobby/users/'+this.$route.params.id).then(response => {
            console.log(response.data)
            for (let i = 0; i < response.data.length; i++) {
                this.players.push(response.data[i].user)
            }
            console.log(this.players)
        });
        
    },
    methods: {

    },
    beforeRouteLeave (to, from , next) {
        const answer = window.confirm('Do you want to leave the lobby?');
        if (answer) {
            next()
        } else {
            next(false)
        }
    }

}
</script>

<style scoped>
    .wrapper {
        margin: 20px auto;
        width:400px;
        height:400px;
        display:grid;
        grid-template-columns: 200px 200px;
        grid-row: auto auto;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
  }
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