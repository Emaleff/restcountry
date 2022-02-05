<template>
  <input
    type="text"
    class="input"
    placeholder="Search for a country…"
    v-model="inputData"
    @input="onInput"
  />
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "InputCountry",
  data() {
    return {
      inputData: "",
    };
  },
  methods: {
    ...mapMutations(["updateInputValue"]),
    onInput() {
      this.updateInputValue(this.inputData);
    },
  },
};
</script>

<style>
.input {
  background: #2b3844;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  width: 480px;
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
  .input {
    width: 90%;
  }
}
</style>
