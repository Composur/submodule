import Vue from "vue";
import VueRouter from "vue-router";
import RouteMap from './route'

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/nav",
    name: "Nav",
  },
];
routes.forEach(element => {
  element.component = RouteMap[element.name]
});

const router = new VueRouter({
  routes
});

export default router;
