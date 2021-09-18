<template>
  <div>
    {{ searchMovie() }}
    <movie-card
      :name="movie.name"
      :poster="movie.poster"
      :rating="movie.rating"
    />
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
      movie: {},
    }
  },
  methods: {
    searchMovie() {
      for (const mov in movieData.movies) {
        if (movieData.movies[mov].id === parseInt(this.oid)) {
          this.movie = movieData.movies[mov]
        }
      }
    },
  },
}
</script>
<style></style>
