<template>
  <v-navigation-drawer
    app
    temporary
    v-model="inputValue"
    right
  >
    <v-list>
      <v-list-tile>
        <v-spacer />
        <v-btn icon @click="toggleDrawer">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-list-tile>
      <v-list-tile
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
      >
        <v-list-tile-title v-text="item.text" />
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        items: this.$t('Layout.Toolbar.items')
      }
    },

    computed: {
      ...mapState(['appDrawer']),
      inputValue: {
        get () {
          return this.appDrawer
        },
        set (val) {
          this.setDrawer(val)
        }
      }
    },

    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
        toggleDrawer: 'TOGGLE_DRAWER'
      })
    }
  }
</script>
