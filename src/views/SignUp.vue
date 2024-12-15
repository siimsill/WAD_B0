<template>
  <div class="signup-container">
    <form class="signup-form">
      <h3>SignUp</h3>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email" v-model="email" required placeholder="Email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password" required placeholder="Password" />
      </div>
      <button type="submit" class="signup-button" @click.prevent="SignUp">SignUp</button>
    </form>
  </div>
</template>


<script>
export default {
name: "SignUp", 

data: function() {
    return {
   email: '',
   password: '',
  }
  },
  methods: {


SignUp() {
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/signup", {
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
      this.$router.push("/");
      //location.assign("/");
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
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  height: calc(100vh - 160px);
}

.signup-form {
  background-color: #e8f5e9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
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
  align-items: center;
  gap: 10px;
}

label {
  font-size: 1rem;
  color: #333;
  flex: 1;
  text-align: center;
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #fff;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);
  flex: 2;
}

input:focus {
  outline: none;
  border-color: #007bff;
}

.signup-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.signup-button:hover {
  background-color: #0056b3;
}
</style>
