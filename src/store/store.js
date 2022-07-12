import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      await axios.get('https://vuestore.beplusprojects.com/wp-json/wp/v2/stack')
        .then((response) => {
          commit("SET_POSTS", response.data);
        })
        .catch((error) => {
          console.log(error.statusText)
        });
    }
  }
})

export default store;