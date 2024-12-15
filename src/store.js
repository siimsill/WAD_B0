import { createStore } from 'vuex';

export const store = createStore({
  state: {
    posts: [], 
    likedPosts: [], 
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    likePost(state, postId) {
      if (state.likedPosts.includes(postId)) {
        state.likedPosts = state.likedPosts.filter(id => id !== postId);
      } else {
        state.likedPosts.push(postId);
      }
    },
    resetLikes(state) {
      state.likedPosts = []; 
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await fetch('/posts.json');
        const data = await response.json();
        commit('setPosts', data);
      } catch (error) {
        console.error('Error fetching local JSON:', error);
      }
    },
  },
});