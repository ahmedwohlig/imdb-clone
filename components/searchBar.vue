<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="12">
        <v-autocomplete
          ref="search"
          v-model="selected"
          :items="items"
          :search-input.sync="search"
          color="white"
          hide-no-data
          hide-selected
          label="Start typing to search..."
          item-text="name"
          item-value="_id"
          placeholder="Start typing to Search"
          prepend-icon="mdi-database-search"
          return-object
        ></v-autocomplete>
        <h1>{{ selected }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      response: {
        movies: [],
        selected: null,
      },
    }
  },
  computed: { ...mapState(['movies']) },
  watch: {
    async search() {
      await this.$store.dispatch('searchMovies/searchMovies')
      this.items = this.$store.state.searchMovies.movies
    },
  },
  methods: {
    getMovies() {
      this.movies = this.$store.state['searchMovies/movies']
    },
  },
}
</script>
<style></style>
