<template>
    <div class="playField" :class="side">
        <img :class="'deck0'" src="http://127.0.0.1:8000/storage/Cards/deck.png" width="100" height="150" alt="deck" />    
    </div>        
</template>

<script>
export default {
    props :
    {
        side: {
            type: String,
            required: true,
        },
    },
}
</script>

<style>

</style>