<template>
  <div class="navigation-bar">
    <!-- color="#0b032d" -->
    <v-app-bar dense color="#0b032d">
      <div class="left">
        <v-app-bar-nav-icon color="#ffb997"></v-app-bar-nav-icon>
        <v-btn elevation="n-1" color="#ffb997" href="/"> Home </v-btn>
      </div>
      <div class="right">
        <v-btn elevation="n-1" color="#ffb997" href="/bollywood">
          Bollywood
        </v-btn>
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
.right {
  text-decoration: none;
}
</style>
