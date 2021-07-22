<template class="review">
  <v-container >
    <div >
      <h1>Here are the top 5 games of the month</h1>
      <p align="right"><v-btn
        color="success"
        class="mr-4"
        @click="logout"
      >
        Logout
      </v-btn></p>

      <div class="my-container" >
        <div class="box1">
            <div class="image"><v-img
              src="https://wallpapershome.com/images/pages/pic_h/18292.jpg"
            /></div>
          <div class="parent grid-parent">
            <div class="child">
              <p>This sentence contains  example text.<br>
                <br>
                As you can see, two breaks add the space above.</p>
            </div>
            <div class="child">
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-textarea
                  v-model="review"
                  :rules="reviewRules"
                  label="Review"
                ></v-textarea>
                <v-btn
                  color="success"
                  class="mr-4"
                  @click="submitFortnite"

                >
                  Submit Review
                </v-btn>

                <v-btn color="error" class="mr-4" @click="redirectionFortnite">Read Reviews</v-btn>

              </v-form>
            </div>
          </div>


        </div>
        <div class="box1">
            <div class="image"><v-img
              src="https://images-ext-1.discordapp.net/external/wJ_ZDQFQkXIW_6ni_6HdCCFvd1J1nI00GVfG3UW3JhU/%3Fmode%3Dscale%26q%3D90%26h%3D720%26w%3D1280/https/store-images.s-microsoft.com/image/apps.30809.65170969132831011.6c6c3131-3fae-40e0-b990-333548e1d2f9.00d6a418-ec0a-4ed4-aaf3-cf5e243cf52e"
            /></div>
          <div class="parent grid-parent">
            <div class="child">
              <p>This sentence contains  example text.<br>
                <br>
                As you can see, two breaks add the space above.</p>
            </div>
            <div class="child">
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-textarea
                  v-model="review"
                  :rules="reviewRules"
                  label="Review"
                ></v-textarea>
                <v-btn
                  color="success"
                  class="mr-4"
                  @click="submitSiege"

                >
                  Submit Review
                </v-btn>

                <v-btn color="error" class="mr-4" @click="redirectionSiege">Read Reviews</v-btn>

              </v-form>
            </div>
          </div>


        </div>

        <div class="box1">
            <div class="image"><v-img
              src="https://images-ext-1.discordapp.net/external/IODBjUKZ6o-m3KOKz1VS8KBYwLahxGdQ_DDi0sgqb6Q/https/media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/global_assets/common/featured_images/fifa-21-grid-tile-generic-16x9.jpg.adapt.crop191x100.628p.jpg"
            /></div>
          <div class="parent grid-parent">
            <div class="child">
              <p>This sentence contains  example text.<br>
                <br>
                As you can see, two breaks add the space above.</p>
            </div>
            <div class="child">
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-textarea
                  v-model="review"
                  :rules="reviewRules"
                  label="Review"
                ></v-textarea>
                <v-btn
                  color="success"
                  class="mr-4"
                  @click="submitFifa"

                >
                  Submit Review
                </v-btn>

                <v-btn color="error" class="mr-4" @click="redirectionFifa">Read Reviews</v-btn>

              </v-form>
            </div>
          </div>

        </div>


        <div class="box1">

            <div class="image"><v-img
              src="https://images-ext-1.discordapp.net/external/sS6UdeRevUECyzwQb9N5blQn0gkiDtsxwW-dtzowjbo/https/wallpapercave.com/wp/wp6940868.jpg?width=1900&height=1069"
            /></div>

          <div class="parent grid-parent">
            <div class="child">
              <p>This sentence contains  example text.<br>
                <br>
                As you can see, two breaks add the space above.</p>
            </div>
            <div class="child">
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-textarea
                  v-model="review"
                  :rules="reviewRules"
                  label="Review"
                ></v-textarea>
                <v-btn
                  color="success"
                  class="mr-4"
                  @click="submitNba"

                >
                  Submit Review
                </v-btn>

                <v-btn color="error" class="mr-4" @click="redirectionNba">Read Reviews</v-btn>

              </v-form>
            </div>
          </div>

        </div>

        <div class="box1">

            <div class="image"><v-img
              src="https://images-ext-1.discordapp.net/external/zs3WDWmkyRuS2yjVo3M87T121zbQYcE7uHq-4kBqtmk/https/media.gq-magazine.co.uk/photos/5d1397c89a22c2556f947fe5/16%3A9/w_2560%252Cc_limit/Horizon-Zero-Dawn-01-GQ-20Feb17_b.jpg?width=1900&height=1069"
            /></div>

          <div class="parent grid-parent">
            <div class="child">
              <p>This sentence contains  example text.<br>
                <br>
                As you can see, two breaks add the space above.</p>
            </div>
            <div class="child">
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  v-model="review"
                  :rules="reviewRules"
                  label="Review"
                ></v-text-field>
                <v-btn
                  color="success"
                  class="mr-4"
                  @click="submitFortnite"

                >
                  Submit Review
                </v-btn>

                <v-btn color="error" class="mr-4" @click="redirection">Read Reviews</v-btn>

              </v-form>
            </div>
          </div>

        </div>



      </div>
    </div>


  </v-container>

</template>


<script>
import Vue from "vue";
// import VueAspectRatio from "vue-aspect-ratio";

export default {
  data: () => ({
    valid: true,
    review: "",
    fortnite: "Fortnite",
    siege: "Siege",
    fifa:"Fifa",
    horizon:"Horizon",
    nba:"Nba",
    reviewRules: [(v) => !!v || "Review cannot be empty"],
  }),

  methods: {
    async logout() {
      //submit to backend to logout
      let response = await Vue.axios.get("/api/logout");
      if (response.data.success){
        this.$router.push({ path: "/login" });
      }
    },
      async submitFortnite() {
        if (this.$refs.form.validate()){
          //submit to backend to authenticate
          let formData = new FormData();
          formData.append("review", this.review);
          formData.append("gameName", this.fortnite);

          let response = await Vue.axios.post("/api/review", formData);
          if (response.data.success || !response.data.success) {
            location.reload()
          }
        }
      },
    async submitSiege() {
      if (this.$refs.form.validate()){
        //submit to backend to authenticate
        let formData = new FormData();
        formData.append("review", this.review);
        formData.append("gameName", this.siege);

        let response = await Vue.axios.post("/api/review", formData);
        if (response.data.success || !response.data.success) {
          location.reload()
        }
      }
    },
    async submitFifa() {
      if (this.$refs.form.validate()){
        //submit to backend to authenticate
        let formData = new FormData();
        formData.append("review", this.review);
        formData.append("gameName", this.fifa);

        let response = await Vue.axios.post("/api/review", formData);
        if (response.data.success || !response.data.success) {
          location.reload()
        }
      }
    },
    async submitNba() {
      if (this.$refs.form.validate()){
        //submit to backend to authenticate
        let formData = new FormData();
        formData.append("review", this.review);
        formData.append("gameName", this.nba);

        let response = await Vue.axios.post("/api/review", formData);
        if (response.data.success || !response.data.success) {
          location.reload()
        }
      }
    },
      redirectionFortnite(){
        this.$router.push({ path: "/fortnitereview" });
      },
    redirectionSiege(){
      this.$router.push({ path: "/siegereview" });
    },
    redirectionFifa(){
      this.$router.push({ path: "/fifareview" });
    },
    redirectionNba(){
      this.$router.push({ path: "/nbareview" });
    },
      reset() {
        this.$refs.form.reset();
      },
    }
  ,
  // name: "AmazingComponent",
  // components: {
  //   "vue-aspect-ratio": VueAspectRatio
  // }
};
</script>
<style scoped src="../assets/css/review.css">
@import '../assets/css/review.css';
</style>