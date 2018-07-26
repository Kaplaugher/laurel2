<template>
  <v-container fill-height grid-list-xl pb-5>
    <v-layout wrap>
      <v-flex xs12>
        <v-layout wrap>
          <v-flex xs12 md8>
            <h2 class="title mb-3" v-text="$t('Views.About.heading1')" />
            <p v-text="$t('Views.About.headingText1')" />
          </v-flex>
          <v-flex hidden-sm-and-down md4>
            <v-card
              flat
              height="300px"
              img="/static/kitten.jpg"
            />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-layout wrap>
          <v-flex hidden-sm-and-down md4>
            <v-card
              flat
              height="300px"
              img="/static/drt.jpg"
            />
          </v-flex>
          <v-flex xs12 md8>
            <h2 class="title mb-3" v-text="$t('Views.About.heading2')" />
            <p v-text="$t('Views.About.headingText2')" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
