<template>
  <div>
    <Actions />
    <ListCountries />
  </div>
</template>

<script>
import Actions from "./Actions.vue";
import ListCountries from "./ListCountries.vue";
export default {
  name: "Content",
  components: {
    Actions,
    ListCountries,
  },
};
</script>

<style></style>
