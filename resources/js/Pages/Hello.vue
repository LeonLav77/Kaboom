<template>
<div class="container">
  <div class="player1">Player 1</div>
  <div class="cards1"></div>

  <div class="player2">Player 2</div>
  <div class="cards2"></div>

  <div class="player3">Player 3</div>
  <div class="cards3"></div>

  <div class="player4">Player 4</div>
  <div class="cards4"></div>

  <div class="player5">Player 5</div>
  <div class="cards5"></div>

  <div class="player6">Player 6</div>
  <div class="cards6"></div>

  <div class="player7">Player 7</div>
  <div class="cards7"></div>

  <div class="player8">Player 8</div>
  <div class="cards8"></div>

  <div class="player1card1"></div>
  <div class="player1card2"></div>
  <div class="player1card3"></div>
  <div class="player1card4"></div>
  <div class="player1card5"></div>
  <div class="player1card6"></div>
  <div class="player1card7"></div>
  <div class="player1card8"></div>
  <div class="player2card1"></div>
  <div class="player2card2"></div>
  <div class="player2card3"></div>
  <div class="player2card4"></div>
  <div class="player2card5"></div>
  <div class="player2card6"></div>
  <div class="player2card7"></div>
  <div class="player2card8"></div>
  <div class="player3card1"></div>
  <div class="player3card2"></div>
  <div class="player3card3"></div>
  <div class="player3card4"></div>
  <div class="player3card5"></div>
  <div class="player3card6"></div>
  <div class="player3card7"></div>
  <div class="player3card8"></div>
  <div class="player4card1"></div>
  <div class="player4card2"></div>
  <div class="player4card3"></div>
  <div class="player4card4"></div>
  <div class="player4card5"></div>
  <div class="player4card6"></div>
  <div class="player4card7"></div>
  <div class="player4card8"></div>
  <div class="player5card1"></div>
  <div class="player5card2"></div>
  <div class="player5card3"></div>
  <div class="player5card4"></div>
  <div class="player5card5"></div>
  <div class="player5card6"></div>
  <div class="player5card7"></div>
  <div class="player5card8"></div>
  <div class="player6card1"></div>
  <div class="player6card2"></div>
  <div class="player6card3"></div>
  <div class="player6card4"></div>
  <div class="player6card5"></div>
  <div class="player6card6"></div>
  <div class="player6card7"></div>
  <div class="player6card8"></div>
  <div class="player7card1"></div>
  <div class="player7card2"></div>
  <div class="player7card3"></div>
  <div class="player7card4"></div>
  <div class="player7card5"></div>
  <div class="player7card6"></div>
  <div class="player7card7"></div>
  <div class="player7card8"></div>
  <div class="player8card1"></div>
  <div class="player8card2"></div>
  <div class="player8card3"></div>
  <div class="player8card4"></div>
  <div class="player8card5"></div>
  <div class="player8card6"></div>
  <div class="player8card7"></div>
  <div class="player8card8"></div>
</div>
</template>
<script>
export default {
    name: 'Hello',
    data() {
        return {
            message: 'Hello Vue!',
            players: [
                
            ],
        }
    }
}
</script>

<style scoped>
.container {  
    height: 100vh;
    width: 100vw;
    display: grid;
  grid-template-columns: 1fr 1fr 1.4fr 1.4fr 0.2fr 1.1fr 1.1fr 1.1fr 1.1fr 0.3fr 1.1fr 1.1fr 1.1fr 1.1fr 0.2fr 1.4fr 1.4fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1.4fr 1.4fr 0.2fr 1.1fr 1.1fr 1.1fr 1.1fr 0.2fr 1.4fr 1fr 1fr 1fr 0.2fr 1.6fr 1.6fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
}

.player1 { grid-area: 18 / 7 / 20 / 9; }

.player2 { grid-area: 18 / 12 / 20 / 14; }

.cards2 { grid-area: 16 / 11 / 18 / 15; }

.cards1 { grid-area: 16 / 6 / 18 / 10; }

.cards3 { grid-area: 11 / 16 / 15 / 18; }

.cards4 { grid-area: 6 / 16 / 10 / 18; }

.player8 { grid-area: 12 / 1 / 14 / 3; }

.cards8 { grid-area: 11 / 3 / 15 / 5; }

.player7 { grid-area: 7 / 1 / 9 / 3; }

.cards7 { grid-area: 6 / 3 / 10 / 5; }

.player5 { grid-area: 1 / 12 / 3 / 14; }

.cards5 { grid-area: 3 / 11 / 5 / 15; }

.player3 { grid-area: 12 / 18 / 14 / 20; }

.player4 { grid-area: 7 / 18 / 9 / 20; }

.cards6 { grid-area: 3 / 6 / 5 / 10; }

.player6 { grid-area: 1 / 7 / 3 / 9; }

.player1card1 { grid-area: 16 / 7 / 17 / 8; }

.player1card2 { grid-area: 16 / 8 / 17 / 9; }

.player1card3 { grid-area: 17 / 7 / 18 / 8; }

.player1card4 { grid-area: 17 / 8 / 18 / 9; }

.player1card5 { grid-area: 17 / 9 / 18 / 10; }

.player1card6 { grid-area: 16 / 9 / 17 / 10; }

.player1card7 { grid-area: 17 / 6 / 18 / 7; }

.player1card8 { grid-area: 16 / 6 / 17 / 7; }

.player2card1 { grid-area: 16 / 12 / 17 / 13; }

.player2card2 { grid-area: 16 / 13 / 17 / 14; }

.player2card3 { grid-area: 17 / 12 / 18 / 13; }

.player2card4 { grid-area: 17 / 13 / 18 / 14; }

.player2card5 { grid-area: 17 / 14 / 18 / 15; }

.player2card6 { grid-area: 16 / 14 / 17 / 15; }

.player2card7 { grid-area: 17 / 11 / 18 / 12; }

.player2card8 { grid-area: 16 / 11 / 17 / 12; }

.player3card1 { grid-area: 13 / 16 / 14 / 17; }

.player3card2 { grid-area: 12 / 16 / 13 / 17; }

.player3card3 { grid-area: 13 / 17 / 14 / 18; }

.player3card4 { grid-area: 12 / 17 / 13 / 18; }

.player3card5 { grid-area: 11 / 17 / 12 / 18; }

.player3card6 { grid-area: 11 / 16 / 12 / 17; }

.player3card7 { grid-area: 14 / 17 / 15 / 18; }

.player3card8 { grid-area: 14 / 16 / 15 / 17; }

.player4card1 { grid-area: 8 / 16 / 9 / 17; }

.player4card2 { grid-area: 7 / 16 / 8 / 17; }

.player4card3 { grid-area: 8 / 17 / 9 / 18; }

.player4card4 { grid-area: 7 / 17 / 8 / 18; }

.player4card5 { grid-area: 6 / 17 / 7 / 18; }

.player4card6 { grid-area: 6 / 16 / 7 / 17; }

.player4card7 { grid-area: 9 / 17 / 10 / 18; }

.player4card8 { grid-area: 9 / 16 / 10 / 17; }

.player5card1 { grid-area: 4 / 13 / 5 / 14; }

.player5card2 { grid-area: 4 / 12 / 5 / 13; }

.player5card3 { grid-area: 3 / 13 / 4 / 14; }

.player5card4 { grid-area: 3 / 12 / 4 / 13; }

.player5card5 { grid-area: 3 / 11 / 4 / 12; }

.player5card6 { grid-area: 4 / 11 / 5 / 12; }

.player5card7 { grid-area: 3 / 14 / 4 / 15; }

.player5card8 { grid-area: 4 / 14 / 5 / 15; }

.player6card1 { grid-area: 4 / 8 / 5 / 9; }

.player6card2 { grid-area: 4 / 7 / 5 / 8; }

.player6card3 { grid-area: 3 / 8 / 4 / 9; }

.player6card4 { grid-area: 3 / 7 / 4 / 8; }

.player6card5 { grid-area: 3 / 6 / 4 / 7; }

.player6card6 { grid-area: 4 / 6 / 5 / 7; }

.player6card7 { grid-area: 3 / 9 / 4 / 10; }

.player6card8 { grid-area: 4 / 9 / 5 / 10; }

.player7card1 { grid-area: 8 / 4 / 9 / 5; }

.player7card2 { grid-area: 7 / 4 / 8 / 5; }

.player7card3 { grid-area: 7 / 3 / 8 / 4; }

.player7card4 { grid-area: 8 / 3 / 9 / 4; }

.player7card5 { grid-area: 9 / 3 / 10 / 4; }

.player7card6 { grid-area: 9 / 4 / 10 / 5; }

.player7card7 { grid-area: 6 / 4 / 7 / 5; }

.player7card8 { grid-area: 6 / 3 / 7 / 4; }

.player8card1 { grid-area: 13 / 4 / 14 / 5; }

.player8card2 { grid-area: 12 / 4 / 13 / 5; }

.player8card3 { grid-area: 12 / 3 / 13 / 4; }

.player8card4 { grid-area: 13 / 3 / 14 / 4; }

.player8card5 { grid-area: 14 / 3 / 15 / 4; }

.player8card6 { grid-area: 14 / 4 / 15 / 5; }

.player8card7 { grid-area: 11 / 4 / 12 / 5; }

.player8card8 { grid-area: 11 / 3 / 12 / 4; }


</style>