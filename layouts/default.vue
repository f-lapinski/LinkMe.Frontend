<template>
    <v-app>
      <v-navigation-drawer v-model="drawer">
        <!--  -->
      </v-navigation-drawer>
  
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-app-bar-title>Application</v-app-bar-title>
      </v-app-bar>
  
      <v-main>
        <div class="pa-4">
            <NuxtPage />
        </div>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
    const drawer = ref(false)
  </script>