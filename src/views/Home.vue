<template>
  <v-container>
    <h2>Home</h2>
    <h3>Welcome to Good Stuff game reviews. Please Log in or Sign Up to Continue</h3>
    <ul>
<!--      <li>-->
<!--       <router-link to="/">Go to Home</router-link>-->
<!--      </li>-->
<!--      <li>-->
<!--        <router-link to="/about">Go to About</router-link>-->
<!--      </li>-->
<!--      <li>-->
<!--        <router-link to="/login">Go to Login</router-link>-->
<!--      </li>-->
<!--      <li>-->
<!--        <router-link to="/signup">Go to Sign up</router-link>-->
<!--      </li>-->

      <v-btn
        color="success"
        class="mr-4"
        @click="redirectionLogin"
      >
        Log in
      </v-btn>

      <v-btn
        color="success"
        class="mr-4"
        @click="redirection"
      >
        Sign Up
      </v-btn>

<!--      <v-btn-->
<!--        color="success"-->
<!--        class="mr-4"-->
<!--        @click="logout"-->
<!--      >-->
<!--        Logout-->
<!--      </v-btn>-->
    </ul>
  </v-container>
</template>

<script>
import Vue from "vue";

export default {
  methods: {
    async redirection(){
      this.$router.push({ path: "/signup" });
    },async redirectionLogin(){
      this.$router.push({ path: "/login" });
    },
    async logout() {
      //submit to backend to logout
      let response = await Vue.axios.get("/api/logout");
      if (response.data.success){
        this.$router.push({ path: "/login" });
      }
    },
  },
  name: "Home",

  components: {},
};
</script>
