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
            var channel = window.Echo.join('lobby.'+this.$route.params.id);
            channel.here((users) => {
                // console.log(users);
                // this.players = users;
                users.forEach(user => {
                    this.players.push(user);
                });
            });
            channel.joining((user) => {
                console.log(user);
                this.players.push(user);
            });
            channel.leaving((user) => {
                console.log(user);
                this.players.splice(this.players.indexOf(user), 1);
            });
            channel.error((err) => {
                console.log(err);
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