<template>
        <div class="player1" @click="logg">
            <PlayerIcon v-if="players[0]" :player="players[0]" :index="1" />
        </div>
        <!-- <Card v-for="(card, index) in hand" :class="'player1card'+index" :card="card" :index="index" :key="index" /> -->
</template>

<script>
export default {
    components: {
        PlayerIcon: () => import('../Components/PlayerIcon.vue'),
        Card: () => import('../Components/Card.vue'),
    },
}
</script>

<style>

</style>