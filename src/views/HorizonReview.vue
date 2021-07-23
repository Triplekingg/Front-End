<template class="horizonreview" xmlns:th="http://www.w3.org/1999/xhtml">
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
        <h1 align="center">HERE ARE THE REVIEWS FOR HORIZON ZERO DAWN</h1>
        <div class="box1">
          <div class="image">
            <v-img
              src="https://images-ext-1.discordapp.net/external/zs3WDWmkyRuS2yjVo3M87T121zbQYcE7uHq-4kBqtmk/https/media.gq-magazine.co.uk/photos/5d1397c89a22c2556f947fe5/16%3A9/w_2560%252Cc_limit/Horizon-Zero-Dawn-01-GQ-20Feb17_b.jpg?width=1900&height=1069"
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

    async submitFifa() {

      //submit to backend to fetch reviews
      let response = await Vue.axios.get("/api/review/horizon");
      await store.dispatch("setHorizon", response.data);
      this.review = response.data.reviews;
    }

  }),
  beforeMount() {
    this.submitFifa();
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