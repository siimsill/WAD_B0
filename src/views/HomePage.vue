<template>
  <div>
    <div class="posts" id="posts-container">
      <button @click="logout()" class="button">Logout</button>
      <div v-for="post in posts" :key="post.post_id" class="post" @click="goToPostDetail(post.post_id)">
        <div class="post-header">
          <img :src="post.pfp_url" alt="User Icon" class="profile-image" />
          <div>
            <h3 class="post-author">{{ post.author_name }} {{ post.author_lastname }}</h3>
            <p class="post-date">{{ post.create_year }}-{{ post.create_month }}-{{ post.create_day }}</p>
          </div>
        </div>
        <div class="post-body">
          <img v-if="post.photo_url !== 'null'" :src="post.photo_url" class="post-image" />
          <p v-if="post.content !== 'null'" class="post-text">{{ post.content }}</p>
        </div>
        <div class="post-actions">
          <!--  -->
        </div>
      </div>
      <div class="buttons">
        <button @click="goToAddPost()" class="button">Add post</button>
        <button @click="deleteAllPosts()" class="button">Delete all</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    likedPosts() {
      return this.$store.state.likedPosts;
    },
  },
  methods: {
    goToPostDetail(postId) {
      this.$router.push(`/post/${postId}`)
    },
    goToAddPost() {
      this.$router.push('/post/add')
    },
    async deleteAllPosts() {
      try {
        const response = await fetch('http://localhost:3000/api/posts', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          throw new Error('Failed to delete all posts');
        }

        alert('All posts have been deleted successfully!');
        this.$store.dispatch('fetchPosts'); 
      } catch (error) {
        console.error('Error deleting all posts:', error.message);
        alert('Error: Could not delete all posts.');
      }
    },
    async logout() {
      try {
        const response = await fetch('http://localhost:3000/auth/logout', {
          method: 'GET',
          credentials: 'include', 
        });

        if (!response.ok) {
          throw new Error('Failed to log out');
        }

        alert('Logged out successfully!');
        this.$router.push('/login');
      } catch (error) {
        console.error('Error logging out:', error.message);
        alert('Error: Could not log out.');
      }
    },
  },
  mounted() {
    this.$store.dispatch('fetchPosts');
  },
};
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: auto;
  margin-bottom: 1%;
}

.post {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #e8f5e9;
}

.post-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.post-author {
  margin: 0;
  font-weight: bold;
  text-align: left
}

.post-date {
  font-size: 0.85rem;
  color: #888;
  text-align: left;
}

.post-body {
  margin-top: 10px;
}

.post-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.post-text {
  margin: 10px 0;
  text-align: left;
}

.like-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  color: #007bff;
}

.like-button:hover {
  transform: scale(1.2);
}


.reset-likes {
  margin-top: 20px;
  text-align: center;
}

.reset-likes button {
  padding: 10px 15px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.reset-likes button:hover {
  background-color: #e60000;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.button {
  appearance: none;
  background: rgb(56, 150, 188);
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  width: fit-content;
  margin: auto;
}



</style>



