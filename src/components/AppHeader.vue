<template>
  <header class="header">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/signup">Signup</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  margin-bottom: 1%;
}
nav a {
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
</style>
