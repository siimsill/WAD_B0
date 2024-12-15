<template>
  <div>
    <div class="posts" id="posts-container">
      <div v-for="post in posts" :key="post.post_id" class="post">
        <div class="post-header">
          <div>
            <p class="post-date">{{ post.create_year }}-{{ post.create_month }}-{{ post.create_day }}</p>
          </div>
        </div>
        <div class="post-body">
          <p v-if="post.content !== 'null'" class="post-text">{{ post.content }}</p>
        </div>
        <div class="post-actions">
          <!--  -->
        </div>
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


</style>



