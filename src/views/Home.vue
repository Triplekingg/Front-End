<template>
  <v-container>
    <h2>Home</h2>
    <ul>
      <li>
       <router-link to="/">Go to Home</router-link>
      </li>
      <li>
        <router-link to="/about">Go to About</router-link>
      </li>
      <li>
        <router-link to="/login">Go to Login</router-link>
      </li>
      <li>
        <router-link to="/signup">Go to Sign up</router-link>
      </li>
      <li>
        <router-link to="/logout" @click="logout">Log Out</router-link>
      </li>
    </ul>
  </v-container>
</template>

<script>
import Vue from "vue";

export default {
  methods: {
    async logout() {
      //submit to backend to authenticate
      let response = await Vue.axios.get("/api/logout");
      if (response.data.success){
        this.$router.push({ path: "/logout" });
      }
    },
  },
  name: "Home",

  components: {},
};
</script>
