<template>
  <v-footer>
    <v-container fluid class="alpha-footer">
      <v-layout
        row
        wrap
        class="blue-grey darken-2 fill-height"
      >
        <v-flex xs12>
          <v-card
            tile
            flat
            dark
            class="blue-grey darken-4 text-xs-center"
          >
            <v-card-text>
              <slot />
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "alpha-footer",
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    company: String,
    facebook: String,
    github: String,
    social: {
      type: Array,
      default: () => []
    },
    twitter: String
  },
  computed: {
    computedSocial() {
      if (this.social.length) return this.social;

      const social = [];

      if (this.github) {
        social.push({
          text: this.$t("Layout.Footer.github"),
          icon: "mdi-github-circle",
          href: this.github
        });
      }

      if (this.twitter) {
        social.push({
          text: this.$t("Layout.Footer.twitter"),
          icon: "mdi-twitter-circle",
          href: this.twitter
        });
      }

      if (this.facebook) {
        social.push({
          text: this.$t("Layout.Footer.facebook"),
          icon: "mdi-facebook-box",
          href: this.facebook
        });
      }

      return social;
    }
  }
};
</script>

<style lang="stylus">
.alpha-footer {
  background: #303c42;
  color: #fff;
  display: block;
  padding: 0 !important;
  height: auto;

  .container {
    padding: 0;
    margin: 0;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 10px;
    }

    a {
      color: #fff;
      text-decoration: none;
      transition: 0.2s ease-in;

      &:hover {
        opacity: 0.5;
      }
    }
  }
}
</style>
