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
        <h1 align="center">HERE ARE THE REVIEWS FOR FORTNITE</h1>
        <div class="box1">
          <div class="image">
            <v-img
              src="https://wallpapershome.com/images/pages/pic_h/18292.jpg"
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
    fortnite: "Fortnite",
    reviewRules: [(v) => !!v || "Review cannot be empty"],

    async submitFortnite() {

      //submit to backend to fetch reviews
      let response = await Vue.axios.get("/api/review/fortnite");
      await store.dispatch("setFortnite", response.data);
      this.review = response.data.reviews;
    }

  }),
  beforeMount() {
    this.submitFortnite();
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