import Vue from 'vue'
import VueRouter from 'vue-router'

import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
// import createListView from '../views/CreateListView.js';

import store from '../store/index.js';
import bus from '../utils/bus.js';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      component: NewsView,
      // component: createListView('NewsView'),
      beforeEnter(to, from, next) {
        const pageName = to.path.substr(1);
        bus.$emit('on:progress');
          store.dispatch('FETCH_LIST', pageName)
            .then(() => next())
            .catch(error => console.log(error))
      }
    },
    {
      path: '/ask',
      component: AskView,
      // component: createListView('AskView'),
      beforeEnter(to, from, next) {
        const pageName = to.path.substr(1);
        bus.$emit('on:progress');
          store.dispatch('FETCH_LIST', pageName)
            .then(() => next())
            .catch(error => console.log(error))
      }
    },
    {
      path: '/jobs',
      component: JobsView,
      // component: createListView('JobsView'),
      beforeEnter(to, from, next) {
        const pageName = to.path.substr(1);
        bus.$emit('on:progress');
          store.dispatch('FETCH_LIST', pageName)
            .then(() => next())
            .catch(error => console.log(error))
      }
    },
    {
      path: '/item',
      component: ItemView,
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ]
});