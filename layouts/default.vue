<template>
    <v-app>
      <v-app-bar color='brand'>
        <v-app-bar-nav-icon v-if="mobile" @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-app-bar-title>LinkMe</v-app-bar-title>
        <v-spacer></v-spacer>
        <VBtn icon="mdi-theme-light-dark" title="Przełącz motyw" @click="toggleTheme()"></VBtn>
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
    import { useTheme } from 'vuetify';
    import { useStorage } from '@vueuse/core';

    const theme = useTheme();
    const { mobile } = useDisplay();

    const drawer = ref(null);
    const currentTheme = useStorage('currentTheme', 'light');

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

    function toggleTheme() {
      let newTheme = theme.global.current.value.dark ? 'light' : 'dark';
      theme.global.name.value = newTheme;
      currentTheme.value = newTheme
    }

    onMounted(() => {
      theme.global.name.value = currentTheme.value
    });

  </script>