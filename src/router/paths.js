/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: "",
    // Relative to /src/views
    view: "Home",
    meta: {
      title: "Home",
      description: "Customized vue-cli templates for Vue and Vuetify",
      keywords: "vue, vuetify, vuetify templates, vuetify themes"
    }
  },
  {
    path: "services",
    // Relative to /src/views
    view: "Services",
    meta: {
      title: "Our Services",
      description: "Customized vue-cli templates for Vue and Vuetify",
      keywords: "vue, vuetify, vuetify templates, vuetify themes"
    }
  },
  {
    path: "about",
    // Relative to /src/views
    view: "About",
    meta: {
      title: "About",
      description: "Customized vue-cli templates for Vue and Vuetify",
      keywords: "vue, vuetify, vuetify templates, vuetify themes"
    }
  },
  {
    path: "contact",
    // Relative to /src/views
    view: "Contact",
    meta: {
      title: "Contact",
      description: "Customized vue-cli templates for Vue and Vuetify",
      keywords: "vue, vuetify, vuetify templates, vuetify themes"
    }
  }
];
