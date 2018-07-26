<template>
  <v-container fill-height>
    <v-layout wrap pt-5 justify-center align-center>
      <v-flex md3 xs6>
        <ul>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </v-flex>
      <v-flex md3 xs6>
        <ul>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </v-flex>
      <v-flex md3 xs6>
        <ul>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </v-flex>
      <v-flex md3 xs6>
        <ul>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </v-flex>
      <v-flex xs12>
        <v-layout justify-center>
          <v-flex xs12 sm10 md8>
            <alpha-testimonial
              :author="testimonial.author"
              :title="testimonial.title"
              :quote="testimonial.quote"
            />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    testimonial() {
      return {
        quote: this.$t("Views.Services.testimonial.quote"),
        author: this.$t("Views.Services.testimonial.author"),
        title: this.$t("Views.Services.testimonial.title")
      };
    }
  }
};
</script>
