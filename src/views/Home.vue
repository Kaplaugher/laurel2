<template>
  <div>
    <v-container fill-height>
      <v-layout justify-center align-center wrap>
        <v-flex
          tag="h2"
          display-1
          text-xs-center
          mb-5
          v-text="$t('Views.Home.platformHeader')"
        />

        <v-flex xs12 mb-5>
          <alpha-card-feature :features="cardFeatures" />
        </v-flex>

        <v-flex xs12 mb-5>
          <alpha-list-feature :features="listFeatures" />
        </v-flex>
      </v-layout>
    </v-container>

    <alpha-hero
      src="/static/server-parallax.png"
      :height="$vuetify.breakpoint.mdAndUp ? 500 : 'auto'"
      :jumbotron="false"
      dark
      class="py-5"
    >
      <v-container fill-height grid-list-xl>
        <v-layout align-center justify-space-around wrap>
          <v-flex
            xs12
            sm5
            v-for="(testimonial, i) in testimonials"
            :key="i"
          >
            <alpha-testimonial
              :author="testimonial.author"
              :title="testimonial.title"
              :quote="testimonial.quote"
              dark
            />
          </v-flex>
        </v-layout>
      </v-container>
    </alpha-hero>
  </div>
</template>

<script>
  export default {
    computed: {
      cardFeatures () {
        return this.$t('Views.Home.cardFeatures')
      },
      listFeatures () {
        return this.$t('Views.Home.listFeatures')
      },
      testimonials () {
        return this.$t('Views.Home.testimonials')
      }
    }
  }
</script>
