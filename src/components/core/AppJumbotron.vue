<template>
  <v-fade-transition mode="out-in">
    <v-jumbotron
      dark
      :height="isHome ? '40vh' : '30vh'"
      :src="`/static/${namespace.toLowerCase()}-jumbotron.jpg`"
      gradient="to top, rgba(13, 3, 29, .85), rgba(25, 25, 38, .85)"
      :key="$route.path"
    >
      <v-fade-transition mode="out-in">
        <v-container
          fill-height
          :key="$route.path"
          v-if="isBooted"
        >
          <v-layout align-center>
            <v-fade-transition mode="out-in">
              <v-flex
                :text-xs-center="isHome"
                :key="$route.path"
              >
                <h1 class="display-2" v-html="title" />
                <div
                  class="subheading"
                  v-html="subTitle"
                  v-if="subTitle"
                />
                <v-btn
                  color="primary px-4 mt-5"
                  dark
                  v-if="isHome"
                >
                  {{ $t('Views.Home.callToActionBtn')}}
                </v-btn>
              </v-flex>
            </v-fade-transition>
          </v-layout>
        </v-container>
      </v-fade-transition>
    </v-jumbotron>
  </v-fade-transition>
</template>

<script>
  export default {
    data: () => ({
      isBooted: false
    }),

    computed: {
      isHome () {
        return this.$route.path === '/'
      },
      namespace () {
        const path = this.$route.path.slice(1)

        return this.isHome
          ? 'Home'
          : `${path.substr(0, 1).toUpperCase()}${path.slice(1)}`
      },
      title () {
        return this.$t(`Views.${this.namespace}.jumbotronTitle`)
      },
      subTitle () {
        return this.$t(`Views.${this.namespace}.jumbotronSubTitle`)
      }
    },

    mounted () {
      setTimeout(() => {
        this.isBooted = true
      }, 200)
    }
  }
</script>
