const restCountriesStore = {
  state() {
    return {
      allCountries: [],
    };
  },
  getters: {
    getCountries(state) {
      return state.allCountries;
    },
  },
  actions: {
    async fetchCountries(ctx) {
      const url = "https://restcountries.com/v3.1/all";
      const response = await fetch(url);
      let countries = await response.json();
      ctx.commit("updateCountries", countries);
    },
  },
  mutations: {
    updateCountries(state, countries) {
      state.allCountries = countries;
    },
  },
};
export default restCountriesStore;
