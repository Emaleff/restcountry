<template>
  <div class="input__wrapp">
    <input
      type="text"
      class="input"
      placeholder="Search for a country…"
      v-model="inputData"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  name: "InputCountry",
  data() {
    return {
      inputData: "",
    };
  },
  methods: {
    onInput() {
      this.$emit("onInput", this.inputData);
    },
  },
};
</script>

<style>
.input__wrapp {
  position: relative;
  width: 480px;
  height: 56px;
}
.input__wrapp::before {
  content: url(../assets/images/search.svg);
  position: absolute;
  top: 19px;
  left: 32px;
  height: 18px;
  width: 18px;
  display: block;
}
.isLightTheme .input__wrapp::before {
  content: url(../assets/images/searchLight.svg);
}
.input {
  background: #2b3844;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  outline: 0;
  border: 0;
  padding: 18px 74px;
  color: #ffffff;
}
.isLightTheme .input {
  background: #ffffff;
  color: #111517;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
}
@media screen and (max-width: 500px) {
  .input__wrapp {
    width: 90%;
  }
}
</style>
