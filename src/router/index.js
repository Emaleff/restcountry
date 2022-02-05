import VueRouter from "vue-router";
import Content from "../components/Content";
import InfoCountry from "../components/InfoCountry";

export default new VueRouter({
  routes: [
    { path: "/restcountry/", name: "main", component: Content },
    {
      path: "restcountry/InfoCountry",
      component: InfoCountry,
      name: "info",
      props: true,
    },
  ],
  mode: "history",
});
