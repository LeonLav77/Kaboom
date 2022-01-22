<template>
    <div>
        <Card v-for="(card, index2) in player.hand" :player_id="player.id" :class="'player'+index+'card'+index2" :card="card" :index="index2" :key="index2" />
    </div>
</template>

<script>
export default {
    components: {
        PlayerIcon: () => import('../Components/PlayerIcon.vue'),
        Card: () => import('../Components/Card.vue'),
    },
    props: {
        player: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    }
}
</script>

<style>

</style>