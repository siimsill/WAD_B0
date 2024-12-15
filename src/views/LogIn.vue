<template>
  <div class="login-container">
    <form class="login-form" @submit.prevent="LogIn">
      <h3>Log In</h3>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email" v-model="email" required placeholder="Email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password" required placeholder="Password" />
      </div>
      <div class="form-buttons">
      <button @click="LogIn"  class="login-button">LogIn</button>
      <button @click='this.$router.push("/signup")' class="signup-button">Signup</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
name: "LogIn", 

data: function() {
    return {
   email: '',
   password: '',
  }
  },
  methods: {


LogIn() {
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', //  Don't forget to specify this if you need cookies
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      //this.$router.push("/");
      location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  }, 
  }

</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.login-form {
  background-color: #e8f5e9;
  padding: 20px;
  border-radius: 10px;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h3 {
  text-align: center;
  color: #00695c;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-size: 1rem;
  color: #333;
  font-weight: bold;
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #fff;
  width: 95%;
}

input:focus {
  outline: none;
  border-color: #007bff;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.login-button,
.signup-button {
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
}

.login-button {
  background-color: #007bff;
  color: white;
  border: none;
}

.login-button:hover {
  background-color: #0056b3;
}

.signup-button {
  background-color: #28a745;
  color: white;
  border: none;
}

.signup-button:hover {
  background-color: #218838;
}
</style>