<template>
  <div class="actions">
    <div class="container actions__container">
      <InputCountry />
      <SelectContinent />
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
