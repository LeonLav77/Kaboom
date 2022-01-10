<template>
  <div class="about">
    <h2>
      Hello
      {{ count }}
    </h2>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'about',
    computed: {
    ...mapState({
      count: state => state.count
    }),
  }
  
}
</script>
