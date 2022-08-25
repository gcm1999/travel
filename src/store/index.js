import { createStore } from "vuex";

// createStore(Vuex);

const state = {
  currentCity: localStorage.getItem('currentCity'),
};
const mutations = {
    setCurrentCity(state, city) {
        state.currentCity = city
  },
};
const actions = {};
const getters = {};

//导出store
export default new createStore({
  state,
  mutations,
  actions,
  getters,
});
