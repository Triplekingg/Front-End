<template>
  <v-container>
    <h3>Welcome to Good Stuff game reviews. Please Log in or Sign Up to Continue</h3>
    <ul>
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
    </ul>
    <div class="image"><v-img
      src="https://media.discordapp.net/attachments/850372701394829396/867862975833309204/ps.png?width=1080&height=487"
    /></div>
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
