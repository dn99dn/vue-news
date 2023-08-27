import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchList,
  fetchItemInfo,
  fetchUserInfo
} from '../api/index.js';

export default {
// Promise
  // FETCH_NEWS({ commit }) {
  //   fetchNewsList()
  //     .then(response => {
  //       commit('SET_NEWS', response.data);
  //       return response;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },
  // async-await
  async FETCH_NEWS(store) {
    try {
      const response = await fetchNewsList();
      store.commit('SET_NEWS', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  // FETCH_ASK({ commit }) {
  //   return fetchAskList()
  //     .then(({ data }) => {
  //       commit('SET_ASK', data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },
 async FETCH_ASK({ commit }) {
    try {
      const response = await fetchAskList();
      commit('SET_ASK', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  // FETCH_JOBS({ commit }) {
  //   return fetchJobsList()
  //     .then(({ data }) => {
  //       commit('SET_JOBS', data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },
  async FETCH_JOBS({ commit }) {
    try {
      const response = await fetchJobsList();
      commit('SET_JOBS', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  // FETCH_LIST({ commit }, pageName) {
  //   return fetchList(pageName)
  //     .then(({ data }) => {
  //       commit('SET_LIST', data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response;
  },
  FETCH_ITEM({ commit }, id) {
    return fetchItemInfo(id)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_USER({ commit }, username) {
    return fetchUserInfo(username)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log(error);
      })
  }
}