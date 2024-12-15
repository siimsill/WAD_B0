<template>
    <div class="container">
        <div class="post-box" v-if="post">
            <h2 class="title">A Post</h2>
            <div class="form-group">
                <label for="body">Body</label>
                <input type="text" id="body" v-model="post.content" placeholder="Post body"/>
            </div>
            <div class="button-group">
                <button class="btn update" @click="updatePost">Update</button>
                <button class="btn delete" @click="deletePost">Delete</button>
            </div>
        </div>
        <p v-else>Loading...</p>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: "PostView",
    data() {
        return {
            postId: null // id from params
        };
    },
    computed: {
        ...mapState(['post'])
    },
    async created() {
        this.postId = this.$route.params.id;

        console.log(this.postId)
        
        await this.fetchPostById(this.postId)
    },
    methods: {
        ...mapActions(['fetchPostById']),
        async updatePost() {
            try {
                const updatedPost = {
                    content: this.post.content,
                };

                // Send a PUT request to update the post
                const response = await fetch(`http://localhost:3000/api/posts/${this.postId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(updatedPost),
                });

                if (!response.ok) {
                    throw new Error("Failed to update the post");
                }

                const result = await response.json();
                alert("Post updated successfully!");
                console.log("Updated Post:", result);
                this.$router.push("/")
            } catch (error) {
                console.error("Error updating post:", error.message);
            }
        },
    
        async deletePost() {
            try {
                const response = await fetch(`http://localhost:3000/api/posts/${this.postId}`, {
                    method: "DELETE",
                });

                if (!response.ok) {
                    throw new Error("Failed to delete the post");
                }

                alert("Post deleted successfully!");
                this.$router.push("/"); 
            } catch (error) {
                console.error("Error deleting post:", error.message);
                alert("Failed to delete the post.");
            }
        }
    },

}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: start;
    height: 100vh;
    font-family: Arial, sans-serif;
}

.post-box {
    background-color: #e8f5e9;
    padding: 20px;
    border-radius: 10px;
    width: 350px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.title {
    margin-bottom: 20px;
    font-size: 18px;
    color: #333;
}


.form-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

label {
    font-size: 14px;
    font-weight: bold;
}

input {
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-left: 10px;
    background-color: #fff;
}

.button-group {
    display: flex;
    justify-content: space-evenly;
}

.btn {
    width: 100px;
    padding: 8px 0;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 14px;
    cursor: pointer;
}

.update {
    background-color: #64b5f6;
}

.delete {
    background-color: #e57373;
}

.btn:hover {
    opacity: 0.9;
}
</style>