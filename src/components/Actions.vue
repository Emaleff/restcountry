<template>
  <div class="actions">
    <div class="container actions__container">
      <InputCountry @onInput="onInput" />
      <SelectContinent @onSelect="onSelect" />
    </div>
  </div>
</template>

<script>
import InputCountry from "./InputCountry.vue";
import SelectContinent from "./SelectContinent.vue";
export default {
  name: "Actions",
  components: {
    InputCountry,
    SelectContinent,
  },
  methods: {
    onInput(data) {
      this.$emit("onInput", data);
    },
    onSelect(data){
            this.$emit("onSelect", data);
    }
  },
};
</script>

<style scoped>
.actions {
  margin-top: 48px;
}
.actions__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media screen and (max-width: 760px) {
  .actions__container {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
