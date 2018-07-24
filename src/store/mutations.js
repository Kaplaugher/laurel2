// https://vuex.vuejs.org/en/mutations.html

export default {
  SET_DRAWER: (state, payload) => (state.appDrawer = payload),
  TOGGLE_DRAWER: state => (state.appDrawer = !state.appDrawer)
}
