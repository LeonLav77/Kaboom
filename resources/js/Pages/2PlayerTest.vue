<template>
    <div class="container">
        <div class="player1">Player 1</div>
        <div class="player1card1"></div>
        <div class="player1card2"></div>
        <div class="player1card3"></div>
        <div class="player1card4"></div>
        <div class="player1card5"></div>
        <div class="player1card6"></div>
        <div class="player1card7"></div>
        <div class="player1card8"></div>

        <div class="player2">Player 2</div>
        <div class="player2card1"></div>
        <div class="player2card2"></div>
        <div class="player2card3"></div>
        <div class="player2card4"></div>
        <div class="player2card5"></div>
        <div class="player2card6"></div>
        <div class="player2card7"></div>
        <div class="player2card8"></div>
    </div>
</template>

<script>
export default {
    data: () => ({
        players: [],
        me: null,
        owner: null,
        countDown : 2
    }),
}
</script>

<style scoped>
.container {  
    height: 100vh;
    width: 100vw;
    display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . . player2 player2 . . ."
    ". . . player2 player2 . . ."
    ". . player2card5 player2card4 player2card3 player2card8 . ."
    ". . player2card6 player2card2 player2card1 player2card7 . ."
    ". . . . . . . ."
    ". . player1card7 player1card1 player1card2 player1card6 . ."
    ". . player1card8 player1card3 player1card4 player1card5 . ."
    ". . . player1 player1 . . ."
    ". . . player1 player1 . . .";
}

.player1 { grid-area: player1; }

.player2 { grid-area: player2; }

.player1card1 { grid-area: player1card1; }

.player1card2 { grid-area: player1card2; }

.player1card3 { grid-area: player1card3; }

.player1card4 { grid-area: player1card4; }

.player1card5 { grid-area: player1card5; }

.player1card6 { grid-area: player1card6; }

.player1card7 { grid-area: player1card7; }

.player1card8 { grid-area: player1card8; }

.player2card1 { grid-area: player2card1; }

.player2card2 { grid-area: player2card2; }

.player2card3 { grid-area: player2card3; }

.player2card4 { grid-area: player2card4; }

.player2card5 { grid-area: player2card5; }

.player2card6 { grid-area: player2card6; }

.player2card7 { grid-area: player2card7; }

.player2card8 { grid-area: player2card8; }

</style>