<template>
  <v-container>
    <div class="Top">
      <p>
      </p>
      <h1 align="center">Welcome to Good Stuff Game Reviews</h1>
      <h3 align="center"> Please Log in or Sign up to Continue</h3>
      <p>

      </p>
      <p>

      </p>
      <div class="buttons" align="center">
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
      </div>

    </div>


    <div class="image">
      <v-img
        src="https://cdn.discordapp.com/attachments/850372701394829396/867868033909129276/100571.png"
      />
    </div>
  </v-container>
</template>

<script>
import Vue from "vue";

export default {
  methods: {
    async redirection() {
      this.$router.push({ path: "/signup" });
    }, async redirectionLogin() {
      this.$router.push({ path: "/login" });
    },
    async logout() {
      //submit to backend to logout
      let response = await Vue.axios.get("/api/logout");
      if (response.data.success) {
        this.$router.push({ path: "/login" });
      }
    }
  },
  name: "Home",

  components: {}
};
</script>
<style scoped src="../assets/css/review.css">
@import '../assets/css/review.css';