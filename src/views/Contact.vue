<template>
  <v-container fill-height>
    <v-layout justify-space-between wrap>
      <v-flex xs12 md5>
        <h2 class="headline mb-2" v-text="$t('Views.Contact.heading1')" />
        <p class="mb-4" v-text="$t('Views.Contact.headingText1')" />
        <v-card>
          <v-card-text>
            <v-text-field
              label="Name"
              prepend-icon="mdi-account"
            />
            <v-text-field
              label="Email"
              prepend-icon="mdi-email"
            />
            <v-textarea
              label="Message"
              prepend-icon="mdi-message-text"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn large class="px-5" color="primary">
              {{ $t('Views.Contact.submit') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <GoogleMap />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import GoogleMap from "@/components/core/GoogleMap.vue";
export default {
  components: {
    GoogleMap
  }
};
</script>

