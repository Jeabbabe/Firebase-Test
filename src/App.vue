<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <v-layout>
    <v-app-bar color="brown" image="../src/components/images/thai-food10.jpg">
      <template v-slot:image>
        <v-img gradient="to top right, rgba(128,64,0,.8), rgba(92,56,0,.8)"></v-img>
      </template>
      <v-app-bar-title>หน้าเว็บสั่งเมนู</v-app-bar-title>
      <v-spacer />
      <div class="container">
        <RouterLink to="/">
          <v-btn color="orange" size="large" variant="elevated">Home</v-btn>
        </RouterLink>
        <RouterLink to="/order">
          <v-btn color="orange" size="large" variant="elevated">Order</v-btn>
        </RouterLink>
        <RouterLink to="/login">
          <v-btn color="orange" size="large" variant="elevated">Log In</v-btn>
        </RouterLink>
      </div>
    </v-app-bar>
    <v-main><RouterView /></v-main>
  </v-layout>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 10px;
}
</style>
