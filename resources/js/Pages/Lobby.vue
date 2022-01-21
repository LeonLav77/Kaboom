<template>
    <div class="wrapper">
        <PlayerIcon v-for="(player, index) in players" :index="index+1" :player="player" :key="index" />
        
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
        countDown : 2
    }),
    mounted() {
        window.Echo.leave();
        axios.post('/api/lobbyInfo/'+this.$route.params.id)
            .then(response => {
                this.owner = response.data.user;
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
                // alert('You are the owner of this lobby');
            }
        });
        channel.joining((user) => {
            this.players.push(user);
            // $('#player-icon-'+user.id).addClass('animated bounceIn');
            let no_of_players = this.players.length;
            if(no_of_players == this.number_of_players && this.owner == true) {
                axios.post('/api/startCountdown', {
                    lobby_id: this.$route.params.id
                    })
                    .then(response => {
                        console.log(response.data);
                    });
            }
            // check if lobby is full, if yes start count down
        });
        channel.leaving((user) => {
            this.players.splice(this.players.indexOf(user), 1);
        });
        channel.error((err) => {
            console.log(err);
        });
        
        channel.listen('StartCountdown', (data) => {
            this.countDownTimer() 
        });
        channel.listen('StartGame', (data) => {
            this.$router.push('/game/'+data.game_id);
        });
},
    methods: {
        countDownTimer() {
                if(this.countDown > 0) {
                    setTimeout(() => {
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 1000)
                }else{
                    // if you are the leader you should start
                    if(this.owner == true) {
                        axios.post('/api/startGame', {
                            lobby_id: this.$route.params.id
                            })
                            .then(response => {
                                console.log(response.data);
                            });
                    }
                }
        },
    },  
    // beforeRouteLeave (to, from , next) {
    //     // if going to the game then next()
    //     // THIS IS JUST TEMPORARY IT NEED TO BE GAME ANY NUMBER
    //     if(to.path == '/game/'+this.$route.params.id) {
    //         next();
    //     }
    //     const answer = window.confirm('Do you want to leave the lobby?');
    //     if (answer) {
    //         window.Echo.leave();
    //         next()
    //     } else {
    //         next(false)
    //     }
        
    // },        

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