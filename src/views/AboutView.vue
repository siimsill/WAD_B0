<template>
  <div class="container">
    <div>
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us:</p>
      <ul class="contact-info">
        <li>Email: <a href="mailto:example@mail.com">example@mail.com</a></li>
        <li>Phone: <a href="tel:">+372 55 555 555</a></li>
        <li>Address: 123 Street, City, Country</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
}
</script>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
  height: calc(100vh - 160px);
}

.container > div {
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  text-align: center;
}

.contact-info {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

</style>
