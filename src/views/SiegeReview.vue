<template class="fortnitereview" xmlns:th="http://www.w3.org/1999/xhtml">
  <v-container>
    <div>
      <p align="left">
        <v-btn
          color="blue"
          class="mr-4"
          @click="redirection"
        >
          Back
        </v-btn>
      </p>

      <p align="left">
        <v-btn
          color="red"
          class="mr-4"
          @click="logout"
        >
          Logout
        </v-btn>
      </p>

      <div class="my-container">
        <h1 align="center">HERE ARE THE REVIEWS FOR RAINBOW 6 SIEGE</h1>
        <div class="box1">
          <div class="image">
            <v-img
              src="https://images-ext-1.discordapp.net/external/wJ_ZDQFQkXIW_6ni_6HdCCFvd1J1nI00GVfG3UW3JhU/%3Fmode%3Dscale%26q%3D90%26h%3D720%26w%3D1280/https/store-images.s-microsoft.com/image/apps.30809.65170969132831011.6c6c3131-3fae-40e0-b990-333548e1d2f9.00d6a418-ec0a-4ed4-aaf3-cf5e243cf52e"
            />
          </div>
          <div class="parent" align="left">
            <div class="child" align="left">
              <ul class="no-bullets" v-if="review.length">
                <li v-for="(rev) in review" :key="rev.id">
                  <span class="hhh ">{{ rev.username }}: {{ rev.reviews }}<br> </span>
                  <br>
                  <span v-if="rev.error">
      <ol>
       <li> v-for="err in file.response.errorMessages> {{ err }} </li>
      </ol>
    </span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>


  </v-container>

</template>


<script>
import Vue from "vue";
import store from "@/store";

export default {
  data: () => ({
    blah: "hi",
    vueProp: "vue variable",
    valid: true,
    review: null,
    username: null,
    reviewRules: [(v) => !!v || "Review cannot be empty"],

    async submitSiege() {

      //submit to backend to fetch reviews
      let response = await Vue.axios.get("/api/review/siege");
      await store.dispatch("setSiege", response.data);
      this.review = response.data.reviews;
    }

  }),
  beforeMount() {
    this.submitSiege();
  },

  methods: {
    async logout() {
      //submit to backend to logout
      let response = await Vue.axios.get("/api/logout");
      if (response.data.success) {
        this.$router.push({ path: "/login" });
      }
    },
    redirection() {
      this.$router.push({ path: "/review" });
    },
    reset() {
      this.$refs.form.reset();
    }
  }

};
</script>
<style scoped src="../assets/css/review.css">
@import '../assets/css/review.css';
</style>