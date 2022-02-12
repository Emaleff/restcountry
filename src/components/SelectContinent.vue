<template>
  <div class="select__wrapp">
    <select v-model="selectValue" class="select" @change="onSelect">
      <option value="" hidden disabled selected>Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectContinent",
  data() {
    return {
      selectValue: "",
    };
  },
  methods: {
    onSelect() {
      this.$emit("onSelect", this.selectValue);
    },
  },
};
</script>

<style scoped>
.select__wrapp {
  width: 225px;
  height: 56px;
  box-sizing: border-box;
  background: #2b3844;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
}
.isLightTheme .select__wrapp {
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
}
.select {
  width: 200px;
  height: 56px;
  box-sizing: border-box;
  background: #2b3844;
  border-radius: 5px;
  padding: 18px 24px;
  font-family: NunitoSans;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  border: 0;
  outline: 0;
}
.isLightTheme .select {
  background: #ffffff;
  /* box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439); */
  color: #111517;
}
.select:hover {
  cursor: pointer;
}
@media screen and (max-width: 760px) {
  .select {
    margin-top: 40px;
  }
}
</style>
