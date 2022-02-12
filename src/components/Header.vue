<template>
  <header class="header">
    <div class="container header__container">
      <h2 class="header__title">Where in the world?</h2>
      <div class="header__actions" @click="changeTheme">
        <img
          v-if="!isLightTheme"
          src="../assets/images/darkMode.svg"
          class="header__actions-img"
          alt=""
        />
        <img
          v-else
          src="../assets/images/lightMode.svg"
          alt=""
          class="header__actions-img"
        />
        <span class="header__actions-text">Dark Mode </span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    isLightTheme: {
      required: true,
    },
  },
  methods: {
    changeTheme() {
      this.$emit("changeTheme");
    },
  },
};
</script>

<style scoped>
.header {
  background: #2b3844;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
}
.isLightTheme .header {
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
}
.header__container {
  padding: 23px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__title {
  font-size: 24px;
  line-height: 33px;
}
.header__actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__actions:hover {
  cursor: pointer;
}
.header__actions-text {
  font-family: NunitoSans;
  font-size: 16px;
  line-height: 22px;
  margin-left: 11px;
}
.header__actions-img {
  width: 15px;
  height: 15px;
  transition: all 0.3s;
}
.header__actions:hover .header__actions-img {
  cursor: pointer;
  transition: all 0.3s;
  transform: scale(1.7);
}
</style>
