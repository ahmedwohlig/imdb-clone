<template>
  <div>
    <navigation-bar />
    <carousel />
    <v-container>
      <v-row no-gutters>
        <v-col v-for="movie in movieData.movies" :key="movie.id">
          <movie-card
            :id="movie.id"
            :name="movie.name"
            :rating="movie.rating"
            :poster="movie.poster"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import movieData from '../assets/movieData.json'

import Carousel from '../components/carousel.vue'
import NavigationBar from '~/components/navigationBar.vue'
import MovieCard from '~/components/movieCard.vue'
export default {
  components: {
    NavigationBar,
    Carousel,
    MovieCard,
  },
  data() {
    return {
      movieData,
    }
  },
}
</script>
<style>
movie-card {
  display: flex;
}
</style>
