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
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await fetch('http://localhost:3000/api/posts'); // Fetch posts from the backend API
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        commit('setPosts', data); // Commit the posts to the state
        console.log('Posts fetched successfully:', data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
  },
});