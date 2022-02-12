import VueRouter from "vue-router";
import Content from "../components/Content";
import InfoCountry from "../components/InfoCountry";

export default new VueRouter({
  routes: [
    { path: "/", name: "main", component: Content },
    {
      path: "/InfoCountry/:country",
      component: InfoCountry,
      name: "info",
      props: true,
    },
  ],
  mode: "history",
});
