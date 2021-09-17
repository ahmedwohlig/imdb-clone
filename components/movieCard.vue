<template>
  <v-card
    elevation="3"
    width="250"
    height="350"
    color="custom-color"
    :href="'/movie?q=' + id"
  >
    <v-img :src="poster" max-height="250px"></v-img>
    <v-card-title>{{ name }}</v-card-title>
    <v-rating
      :value="rating"
      color="amber"
      dense
      half-increments
      readonly
      size="14"
    ></v-rating>
  </v-card>
</template>
<script>
export default {
  props: {
    name: { type: String, default: 'Error: deliver me from the bug' },
    rating: { type: Number, default: 5.0 },
    poster: {
      type: String,
      default:
        'https://media.newyorker.com/photos/5d0d56a203a303d37b7e4451/master/pass/Hutton-DevilExpression.jpg',
    },
    id: { type: Number, default: -1 },
  },
  data() {
    return {}
  },
}
</script>
<style scoped>
.custom-color {
  background-color: #0000;
  color: #0b032d;
}
</style>
