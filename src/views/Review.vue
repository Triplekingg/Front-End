<template class="review">
  <v-container>
    <div>
      <div align="left">
        <h3>Welcome {{ displayname }}</h3>
        <p></p>
        <p align="left">
          <v-btn
            color="red"
            class="mr-4"
            @click="logout"
          >
            Logout
          </v-btn>
        </p>
      </div>
      <div class="Top" align="center">
        <h1>HERE ARE THE TOP 5 GAMES OF THE MONTH</h1>
        <p></p>
      </div>

      <div align="right">

      </div>


      <div class="my-container">
        <div class="box1">
          <div class="image">
            <v-img
              src="https://wallpapershome.com/images/pages/pic_h/18292.jpg"
            />
          </div>
          <div class="parent grid-parent">
            <div class="child">
              <div class="Name">
                NAME: Fortnite
              </div>
              <p></p>
              <div class="ReleaseDate">
                RELEASE DATE: 25 JULY 2017
              </div>
              <p></p>
              <div class="Description">
                <div>
                  DESCRIPTION:
                </div>
                <p></p>
                <div class="DescriptionDetails">
                  Fortnite is a survival game where 100 players fight against each other in player versus player combat
                  to be the last one standing. It is a fast-paced, action-packed game, not unlike The Hunger Games,
                  where strategic thinking is a must in order to survive. There are an estimated 125 million players on
                  Fortnite.
                </div>
                <p></p>

              </div>

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

                <v-btn
                  color="blue"
                  class="mr-4"
                  href="https://www.epicgames.com/fortnite/en-US/download"
                >
                  Buy Now!
                </v-btn>

              </v-form>
            </div>
          </div>


        </div>
        <div class="box1">
          <div class="image">
            <v-img
              src="https://images-ext-1.discordapp.net/external/wJ_ZDQFQkXIW_6ni_6HdCCFvd1J1nI00GVfG3UW3JhU/%3Fmode%3Dscale%26q%3D90%26h%3D720%26w%3D1280/https/store-images.s-microsoft.com/image/apps.30809.65170969132831011.6c6c3131-3fae-40e0-b990-333548e1d2f9.00d6a418-ec0a-4ed4-aaf3-cf5e243cf52e"
            />
          </div>
          <div class="parent grid-parent">
            <div class="child">
              <div class="Name">
                NAME: Rainbow 6 Seige
              </div>
              <p></p>
              <div class="ReleaseDate">
                RELEASE DATE: 01 DECEMBER 2015
              </div>
              <p></p>
              <div class="Description">
                <div>
                  DESCRIPTION:
                </div>
                <p></p>
                <div class="DescriptionDetails">
                  Tom Clancy's Rainbow Six Siege is a first-person shooter game, in which players utilize many different
                  operators from the Rainbow team. Different operators have different nationalities, weapons, and
                  gadgets. Players can also complete in-game "challenges" to get a small amount of renown.
                </div>
                <p></p>

              </div>

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

                <v-btn
                  color="blue"
                  class="mr-4"
                  href="https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/"
                >
                  Buy Now!
                </v-btn>

              </v-form>
            </div>
          </div>


        </div>

        <div class="box1">
          <div class="image">
            <v-img
              src="https://images-ext-1.discordapp.net/external/IODBjUKZ6o-m3KOKz1VS8KBYwLahxGdQ_DDi0sgqb6Q/https/media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/global_assets/common/featured_images/fifa-21-grid-tile-generic-16x9.jpg.adapt.crop191x100.628p.jpg"
            />
          </div>
          <div class="parent grid-parent">
            <div class="child">
              <div class="Name">
                NAME: FIFA 21
              </div>
              <p></p>
              <div class="ReleaseDate">
                RELEASE DATE: 06 OCTOBER 2020
              </div>
              <p></p>
              <div class="Description">
                <div>
                  DESCRIPTION:
                </div>
                <p></p>
                <div class="DescriptionDetails">
                  FIFA 21 is an association football simulation video game
                  published by Electronic Arts as part of the FIFA series.
                  It is the 28th installment in the FIFA series, and was
                  released on 9 October 2020 for Microsoft Windows, Nintendo
                  Switch, PlayStation 4 and Xbox One.
                </div>
                <p></p>
              </div>
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

                <v-btn
                  color="blue"
                  class="mr-4"
                  href="https://store.steampowered.com/app/1313860/EA_SPORTS_FIFA_21/"
                >
                  Buy Now!
                </v-btn>

              </v-form>
            </div>
          </div>

        </div>


        <div class="box1">

          <div class="image">
            <v-img
              src="https://images-ext-1.discordapp.net/external/sS6UdeRevUECyzwQb9N5blQn0gkiDtsxwW-dtzowjbo/https/wallpapercave.com/wp/wp6940868.jpg?width=1900&height=1069"
            />
          </div>

          <div class="parent grid-parent">
            <div class="child">
              <div class="Name">
                NAME: NBA 2K21
              </div>
              <p></p>
              <div class="ReleaseDate">
                RELEASE DATE: 04 SEPTEMBER 2020
              </div>
              <p></p>
              <div class="Description">
                <div>
                  DESCRIPTION:
                </div>
                <p></p>
                <div class="DescriptionDetails">
                  NBA 2K21 is a basketball simulation video game that was developed by
                  Visual Concepts and published by 2K Sports, based on the National
                  Basketball Association. It is the 22nd installment in the NBA 2K
                  franchise and the successor to NBA 2K20, and the predecessor to NBA 2K22.
                </div>
                <p></p>
              </div>
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
                <v-btn
                  color="blue"
                  class="mr-4"
                  href="https://store.steampowered.com/app/1225330/NBA_2K21/"
                >
                  Buy Now!
                </v-btn>
              </v-form>
            </div>
          </div>

        </div>

        <div class="box1">

          <div class="image">
            <v-img
              src="https://images-ext-1.discordapp.net/external/zs3WDWmkyRuS2yjVo3M87T121zbQYcE7uHq-4kBqtmk/https/media.gq-magazine.co.uk/photos/5d1397c89a22c2556f947fe5/16%3A9/w_2560%252Cc_limit/Horizon-Zero-Dawn-01-GQ-20Feb17_b.jpg?width=1900&height=1069"
            />
          </div>

          <div class="parent grid-parent">
            <div class="child">
              <div class="Name">
                NAME: HORIZON ZERO DAWN
              </div>
              <p></p>
              <div class="ReleaseDate">
                RELEASE DATE: 28 FEBRUARY 2017
              </div>
              <p></p>
              <div class="Description">
                <div>
                  DESCRIPTION:
                </div>
                <p></p>
                <div class="DescriptionDetails">
                  Horizon Zero Dawn is a 2017 action role-playing game developed
                  by Guerrilla Games and published by Sony Interactive Entertainment.
                  The plot follows Aloy, a young hunter in a world overrun by machines,
                  who sets out to uncover her past.
                </div>
                <p></p>
              </div>
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
                  @click="submitHorizon"

                >
                  Submit Review
                </v-btn>

                <v-btn color="error" class="mr-4" @click="redirectionHorizon">Read Reviews</v-btn>

                <v-btn
                  color="blue"
                  class="mr-4"
                  href="https://store.steampowered.com/agecheck/app/1151640/"
                >
                  Buy Now!
                </v-btn>

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
import store from "@/store";
// import VueAspectRatio from "vue-aspect-ratio";

export default {
  data: () => ({
    valid: true,
    displayname: "",
    review: "",
    fortnite: "Fortnite",
    siege: "Siege",
    fifa: "Fifa",
    horizon: "Horizon",
    nba: "Nba",
    reviewRules: [(v) => !!v || "Review cannot be empty"],
    async getDisplayName() {

      //submit to backend to fetch reviews
      let response = await Vue.axios.get("/api/whoami");
      await store.dispatch("setLoggedInUser", response.data);
      this.displayname = response.data.name;
    }
  }),
  beforeMount() {
    this.getDisplayName();
  },

  methods: {
    async logout() {
      //submit to backend to logout
      let response = await Vue.axios.get("/api/logout");
      if (response.data.success) {
        this.$router.push({ path: "/login" });
      }
    },
    async submitFortnite() {
      if (this.$refs.form.validate()) {
        //submit to backend to authenticate
        let formData = new FormData();
        formData.append("review", this.review);
        formData.append("gameName", this.fortnite);

        let response = await Vue.axios.post("/api/review", formData);
        if (response.data.success || !response.data.success) {
          location.reload();
        }
      }
    },
    async submitSiege() {
      if (this.$refs.form.validate()) {
        //submit to backend to authenticate
        let formData = new FormData();
        formData.append("review", this.review);
        formData.append("gameName", this.siege);

        let response = await Vue.axios.post("/api/review", formData);
        if (response.data.success || !response.data.success) {
          location.reload();
        }
      }
    },
    async submitFifa() {
      if (this.$refs.form.validate()) {
        //submit to backend to authenticate
        let formData = new FormData();
        formData.append("review", this.review);
        formData.append("gameName", this.fifa);

        let response = await Vue.axios.post("/api/review", formData);
        if (response.data.success || !response.data.success) {
          location.reload();
        }
      }
    },
    async submitNba() {
      if (this.$refs.form.validate()) {
        //submit to backend to authenticate
        let formData = new FormData();
        formData.append("review", this.review);
        formData.append("gameName", this.nba);

        let response = await Vue.axios.post("/api/review", formData);
        if (response.data.success || !response.data.success) {
          location.reload();
        }
      }
    },
    async submitHorizon() {
      if (this.$refs.form.validate()) {
        //submit to backend to authenticate
        let formData = new FormData();
        formData.append("review", this.review);
        formData.append("gameName", this.horizon);

        let response = await Vue.axios.post("/api/review", formData);
        if (response.data.success || !response.data.success) {
          location.reload();
        }
      }
    },
    redirectionFortnite() {
      this.$router.push({ path: "/fortnitereview" });
    },
    redirectionSiege() {
      this.$router.push({ path: "/siegereview" });
    },
    redirectionFifa() {
      this.$router.push({ path: "/fifareview" });
    },
    redirectionNba() {
      this.$router.push({ path: "/nbareview" });
    },
    redirectionHorizon() {
      this.$router.push({ path: "/horizonreview" });
    },
    reset() {
      this.$refs.form.reset();
    }
  }

  // name: "AmazingComponent",
  // components: {
  //   "vue-aspect-ratio": VueAspectRatio
  // }
};
</script>
<style scoped src="../assets/css/review.css">
@import '../assets/css/review.css';
</style>