import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
    list: [],
    item: {},
    user: {},
  },
  getters: {
    fetchedNews(state) {
      return state.news;
    },
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedJobs(state) {
      return state.jobs;
    },
    fetchedList(state) {
      return state.list;
    },
    fetchedItem(state) {
      return state.item;
    },
    fetchedUser(state) {
      return state.user;
    },
  },
  mutations,
  actions,
}) 