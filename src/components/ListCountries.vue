<template>
  <div class="list">
    <div class="container list__container">
      <CountryItem
        v-for="(country, idx) in getCountries"
        :key="idx"
        :country="country"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CountryItem from "./CountryItem.vue";
export default {
  name: "ListCountries",
  components: {
    CountryItem,
  },
  computed: {
    ...mapGetters(["getCountries"]),
  },
};
</script>

<style scoped>
.list__container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media screen and (max-width: 1200px) {
  .list__container{
    justify-content: space-around;

  }
}
</style>
