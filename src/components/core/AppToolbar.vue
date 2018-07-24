<template>
  <v-toolbar
    app
    dark
    :flat="!isScrolling"
    :color="!isScrolling ? 'transparent' : 'secondary'"
    v-scroll="onScroll"
  >
    <img
      src="/static/alpha-software-logo.png"
      
    />
    <v-spacer />
    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        :active-class="!isScrolling ? 'primary--text' : undefined"
        flat
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
      >
        <span v-text="item.text" />
      </v-btn>
    </v-toolbar-items>
    <v-btn v-else icon @click="toggleDrawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data: () => ({
      isScrolling: false
    }),

    computed: {
      items () {
        return this.$t('Layout.Toolbar.items')
      }
    },

    methods: {
      ...mapMutations({
        toggleDrawer: 'TOGGLE_DRAWER'
      }),
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > 100
      }
    }
  }
</script>
