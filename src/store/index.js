import Vue from "vue";
import Vuex from "vuex";
import forecast from "./forecast";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    forecast,
  },
});
