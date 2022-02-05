import Vue from "vue";
import Vuex from "vuex";
import restcountries from "./modules/rest-countries";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    restcountries
  }
});

