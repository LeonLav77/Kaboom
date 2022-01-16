<template>
    <div class="wrapper">
        <PlayerIcon v-for="(player, index) in players" :player="player" :key="index" />
    <div id="countdownTimer">
        <div id="countdown">
            <div id="countdown-text">
                <span id="countdown-time">{{ countDown }}</span>
                <span id="countdown-text-label">seconds</span>
            </div>
            <button id="countdown" class="countdown-button" @click="countDownTimer()">Start</button>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    components: {
        PlayerIcon: () => import('../Components/PlayerIcon.vue'),
    },
    data: () => ({
        players: [],
        number_of_players: 0,
        me: null,
        owner: null,
        countDown : 10
    }),
    mounted() {
            axios.post('/api/lobbyInfo/'+this.$route.params.id)
                .then(response => {
                    // console.log(response.data);
                    this.owner = response.data.user;
                    // console.log(this.owner);
                    this.number_of_players = response.data.number_of_players;
                });
            axios.post('/api/userInfo')
                .then(response => {
                    this.me = response.data;
                });
            var channel = window.Echo.join('lobby.'+this.$route.params.id);
            channel.here((users) => {
                users.forEach(user => {
                    this.players.push(user);
                });
                console.log(this.me);
                // if you are the owner of the lobby put owner true
                if(this.me.id == this.owner.id) {
                    this.owner = true;
                    alert('You are the owner of this lobby');
                }
                console.log(this.owner)
            });
            channel.joining((user) => {
                console.log(user);
                this.players.push(user);
                // $('#player-icon-'+user.id).addClass('animated bounceIn');
                let no_of_players = this.players.length;
                if(no_of_players == this.number_of_players && this.owner == true) {
                    this.countDownTimer();
                }
                // check if lobby is full, if yes start count down

                
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
        countDownTimer() {
                if(this.countDown > 0) {
                    setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 1000)
                }
        },
    },  
    beforeRouteLeave (to, from , next) {
        const answer = window.confirm('Do you want to leave the lobby?');
        if (answer) {
            window.Echo.leave('lobby.'+this.$route.params.id);
            window.Echo.disconnect();
            next()
        } else {
            next(false)
        }
    },        

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