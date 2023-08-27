import Vue from 'vue'
import VueRouter from 'vue-router'

// import NewsView from '../views/NewsView.vue'
// import AskView from '../views/AskView.vue'
// import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import createListView from '../views/CreateListView.js';

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
      // component: NewsView,
      component: createListView('NewsView'),
    },
    {
      path: '/ask',
      // component: AskView,
      component: createListView('AskView'),
    },
    {
      path: '/jobs',
      // component: JobsView,
      component: createListView('JobsView'),
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