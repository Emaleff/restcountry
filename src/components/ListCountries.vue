<template>
  <div class="list">
    <div class="container list__container">
      <!-- <div class="loader" v-if="listCountries.length === 0"></div> -->
      <div class="loader" v-if="!isLoading"></div>
      <CountryItem
        v-for="(country, idx) in listCountries"
        :key="idx"
        :country="country"
      />
    </div>
    <h1 class="isEmpty" v-if="isLoading && listCountries.length === 0">
      Список пуст )
    </h1>
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
  props: {
    inputData: {
      type: String,
      default: "",
    },
    selectData: {
      type: String,
      default: "",
    },
  },
  methods: {
    filtered(arr) {
      return arr;
    },
  },
  computed: {
    ...mapGetters(["getCountries"]),
    isLoading() {
      let isLoading = false;
      if (this.getCountries.length > 0) {
        isLoading = true;
      }
      return isLoading;
    },
    listCountries() { 
      let listCountries = this.getCountries
        .filter((country) => {
          return country.name.common
            .toLowerCase()
            .includes(this.inputData.toLowerCase());
        })
        .filter((country) => {
          return country.region.toLowerCase().includes(this.selectData);
        });
      return listCountries;
    },
  },
};
</script>

<style scoped>
.isEmpty {
  text-align: center;
  margin-top: 50px;
}
.loader {
  font-size: 10px; /* 1em */
  width: 8em;
  height: 8em;
  margin: 0 auto;
  position: relative;
  margin-top: 100px;
  border-radius: 100%;
  background: transparent;
  border: 1em dashed rgba(138, 189, 195, 0.5);
  box-shadow: 0 0 0 0.5em skyblue;
  animation: rota 8.5s linear infinite;
}

.loader:before,
.loader:after {
  content: "";
  position: absolute;
  border-radius: inherit;
}

.loader:before {
  border: 0.75em dashed rgba(138, 189, 195, 0.2);
  top: 0.5em;
  right: 0.5em;
  bottom: 0.5em;
  left: 0.5em;
  animation: rota 3s linear infinite;
}

.loader:after {
  border: 0.7em dashed rgba(138, 189, 195, 0.4);
  top: 2em;
  right: 2em;
  bottom: 2em;
  left: 2em;
  animation: rota 1s linear infinite;
}

@keyframes rota {
  to {
    transform: rotate(360deg);
  }
}
.list__container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media screen and (max-width: 1200px) {
  .list__container {
    justify-content: space-around;
  }
}
</style>
