<template>
    <div>
        <button @click="logout">Logout</button>
    </div>
    <div>
      <h1>Profile</h1>
      <p>Email: {{ user.email }}</p>
   </div>
  </template>
  
  <script>
  export default {
    name: 'UserProfile',
    data() {
      return {
        user: {}
      };
    },
    async created() {
      try {
        const response = await this.$http.get('/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        this.user = response.data;
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    },
    methods: {
        logout() {
        try {
            this.$http.post('/logout', null, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            localStorage.removeItem('token'); // Clear the token
            this.$router.push('/'); // Redirect to login page
            } catch (error) {
                console.error('Logout failed:', error);
            }
        }
    }
    
  };
  </script>