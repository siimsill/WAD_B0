<template>
    <div class="container">
        <div class="form-box">
            <h2 class="form-title">Add Post</h2>
            <form @submit.prevent="addPost">
                <div class="form-group">
                    <label for="body">Body</label>
                    <input id="body" v-model="content" placeholder="Enter your post content" required />
                </div>
                <button type="submit" class="btn add-btn">Add</button>
            </form>
        </div>
    </div>

</template>

<script>
export default {
    name: "AddPostView",
    data() {
        return {
            content: "",
        };
    },
    methods: {
        async addPost() {
            try {
                const response = await fetch("http://localhost:3000/api/posts", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ content: this.content }),
                });

                if (!response.ok) {
                    throw new Error("Failed to add post");
                }

                const result = await response.json();
                alert("Post added successfully!");
                console.log("New Post:", result);

                this.content = "";
                this.$router.push("/");
            } catch (error) {
                console.error("Error adding post:", error.message);
                alert("Error: Unable to add post.");
            }
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: start;
    height: 100vh;
    font-family: Arial, sans-serif;
}

.form-box {
    background-color: #e8f5e9;
    padding: 20px;
    border-radius: 10px;
    width: 350px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.form-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #333;
}

.form-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

label {
    font-weight: bold;
    margin-right: 10px;
}

input {
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
}

.btn {
    border: none;
    color: white;
    padding: 8px 12px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #64b5f6;
}

.btn:hover {
    opacity: 0.9;
}
</style>