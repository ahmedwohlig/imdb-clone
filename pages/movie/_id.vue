<template>
  <div>
    hello from {{ oid }}
    <movie-card />
  </div>
</template>
<script>
import movieData from '~/assets/movieData.json'
import MovieCard from '~/components/movieCard.vue'

export default {
  components: {
    MovieCard,
  },
  data() {
    return {
      oid: this.$route.query.q,
      movie: movieData.movies[this.oid],
    }
  },
}
</script>
<style></style>
