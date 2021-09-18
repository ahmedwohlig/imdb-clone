<template>
  <div class="navigation-bar">
    <!-- color="#0b032d" -->
    <v-app-bar dense color="#0b032d">
      <div class="float-right" style="display: flex">
        <v-app-bar-nav-icon color="#ffb997"></v-app-bar-nav-icon>
        <v-btn elevation="n-1" color="#ffb997" href="/"> Home </v-btn>
        <v-btn elevation="n-1" color="#ffb997" href="/bollywood">
          Bollywood
        </v-btn>
        <v-btn elevation="n-1" color="#ffb997" href="/hollywood">
          Hollywood
        </v-btn>
        <v-text-field color="#ffb997" class="float-right" />
      </div>
    </v-app-bar>
  </div>
</template>
<script>
export default {}
</script>
<style>
.navigation-bar {
  color: white;
}
</style>
