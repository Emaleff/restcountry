<template>
  <div>
    <Actions @onInput="onInput" @onSelect="onSelect" />
    <ListCountries :inputData="inputData" :selectData="selectData" />
  </div>
</template>

<script>
import Actions from "./Actions.vue";
import ListCountries from "./ListCountries.vue";
export default {
  name: "Content",
  data() {
    return {
      inputData: "",
      selectData: "",
    };
  },
  components: {
    Actions,
    ListCountries,
  },
  methods: {
    onInput(inputData) {
      this.inputData = inputData;
    },
    onSelect(selectData) {
      this.selectData = selectData;
    },
  },
};
</script>

<style></style>
