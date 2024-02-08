<template>
    <v-app>
      <v-app-bar color='brand'>
        <v-app-bar-nav-icon v-if="mobile" @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-app-bar-title>LinkMe</v-app-bar-title>
      </v-app-bar>

      <v-navigation-drawer :order="mobile ? -1 : 0" v-model="drawer">
        <VListItem v-for="item in menuItem" :key="item.name" :title="item.name" :prepend-icon="item.icon" :to="item.url"></VListItem>
      </v-navigation-drawer>
  
      <v-main>
        <div class="pa-4">
            <NuxtPage />
        </div>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
    import { useDisplay } from 'vuetify'
    const { mobile } = useDisplay();
    const drawer = ref(null)

    const menuItem = [
      {
        name: 'Strona Główna',
        icon: 'mdi-home',
        url: '/'
      },
      {
        name: 'Monitorowanie Strony',
        icon: 'mdi-web-check',
        url: '/urls'
      },
    ]
  </script>