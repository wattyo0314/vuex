import Vue from "vue";
import Vuex from "vuex";
import counter from "./store/modules/counter";
import doubleCounter from "./store/modules/doubleCounter";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    counterA: counter,
    counterB: counter,
    doubleCounterA: doubleCounter,
    doubleCounterB: doubleCounter,
    totalCounter
  },
    store.dispatch('totalCounter/setModules',
    ['counterA','counterB', 'doubleCounterA', 'doubleCounterB'])

    export default store
  state: {},
  mutations: {},
  actions: {},
});
