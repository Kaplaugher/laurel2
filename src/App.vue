<template>
  <v-app class="white">
    <app-toolbar />

    <app-drawer />

    <app-jumbotron />

    <app-view />

    <app-footer />
  </v-app>
</template>

<script>
  import AppDrawer from '@/components/core/AppDrawer'
  import AppFooter from '@/components/core/AppFooter'
  import AppJumbotron from '@/components/core/AppJumbotron'
  import AppToolbar from '@/components/core/AppToolbar'
  import AppView from '@/components/core/AppView'
  import Meta from '@/mixins/meta'

  export default {
    components: {
      AppDrawer,
      AppFooter,
      AppJumbotron,
      AppToolbar,
      AppView
    },
    mixins: [Meta]
  }
</script>
