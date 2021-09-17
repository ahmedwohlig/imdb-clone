<template>
  <div class="carousel">
    <v-container id="v-con">
      <v-carousel
        cycle
        color="black"
        :show-arrows="false"
        hide-delimiter-background
        show-arrows-on-hover
        class="landscape"
      >
        <v-carousel-item
          v-for="movie in movieData.movies"
          :key="movie.id"
          :src="movie.img"
          cover
        >
          <h2 class="movie-name">{{ movie.name }}</h2>
          <v-img
            :src="movie.poster"
            width="200"
            height="300"
            class="poster"
          ></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>
<script>
import movieData from '../assets/movieData.json'
export default {
  data() {
    return {
      movieData,
    }
  },
}
</script>
<style>
.movie-name {
  z-index: 999;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 3rem;
  font-weight: 300;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}
.poster {
  position: absolute;
  z-index: 999;
  bottom: 0;
  left: 0;
}
</style>
