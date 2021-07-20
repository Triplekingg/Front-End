import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/login",
        name: "Login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    },
];

const router = new VueRouter({
    routes,
});

// Setup beforeEach hook to check the logged in synce the loggin states with backend
router.beforeEach(async (to, from, next) => {
    // get login state using whoami and exios
    let response = await Vue.axios.get("/api/whoami");
    // let response = await Vue.axios.get("api/whomami");
    // response.data is our payload
    await store.dispatch("setLoggedInUser", response.data);
    let isLoggedIn = response.data.loggedIn;
    // make sure if user is logged, user will not be able to see login page
    if (to.name === "Login" && isLoggedIn) {
        next({ name: "Home" });
    }
    //if the name of router is not login, it needs authorization to access the page
    if (to.name !== "Login" && !isLoggedIn) {
        //redirect to login page
        next({ name: "Login" });
    } else {
        // otherwise let go
        next();
    }
});

export default router;
