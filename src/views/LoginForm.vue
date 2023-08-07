<template>
    <div>
      <h2>Login Form</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="email">Email</label>
          <input type="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" v-model="password" required>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        <div v-if="message">{{ message }}</div>
      </form>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        message: '',
      };
    },
    methods: {
      submitForm() {
        const credentials = {
          email: this.email,
          password: this.password,
        };
  
        // Make the API request to Laravel using axios
        this.$http.post('/login', credentials)
          .then(response => {
            this.message = response.data.message;
          })
          .catch(error => {
            if (error.response) {
              this.message = error.response.data.message;
            } else {
              this.message = 'An error occurred';
            }
          });
      },
    },
  };
  </script>