<template>
  <div id="app" :class="{ isLightTheme: isLightTheme }">
    <Header :isLightTheme="isLightTheme" @changeTheme="changeTheme" />
    <!-- <Actions />
    <ListCountries /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "./components/Header";

export default {
  name: "App",
  async created() {
    this.fetchCountries();
  },
  data() {
    return {
      isLightTheme: false,
    };
  },
  components: { Header },
  computed: {},
  methods: {
    ...mapActions(["fetchCountries"]),
    changeTheme() {
      this.isLightTheme = !this.isLightTheme;
    },
  },
};
</script>

<style>
@font-face {
  font-family: NunitoSans-ExtraBold;
  src: url("./assets/fonts/NunitoSans-ExtraBold.ttf");
}
@font-face {
  font-family: NunitoSans;
  src: url("./assets/fonts/NunitoSans-SemiBold.ttf");
}
* {
  margin: 0;
  padding: 0;
  font-family: NunitoSans-ExtraBold;
}
#app {
  background: rgba(32, 44, 54, 1);
  min-height: 100vh;
  color: #ffffff;
  transition: all 0.3s;
}
.isLightTheme#app {
  background: #f2f2f2;
  color: #111517;
  transition: all 0.3s;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
}
@media screen and (max-width: 1300px) {
  .container {
    max-width: 95%;
  }
}
</style>
