const restCountriesStore = {
  state() {
    return {
      allCountries: [],
      currentCountry: "",
      currentCountryInfo: {},
      inputValue: "",
      selectValue: "",
    };
  },
  getters: {
    getCountries(state) {
      return state.allCountries
        .filter((country) => {
          return country.region.toLowerCase().includes(state.selectValue);
        })
        .filter((country) => {
          return country.name.common.toLowerCase().includes(state.inputValue);
        });
    },
    getCurrentCountry(state) {
      return state.currentCountryInfo[0];
    },
  },
  actions: {
    async fetchCountries(ctx) {
      const url = "https://restcountries.com/v3.1/all";
      const response = await fetch(url);
      let countries = await response.json();
      ctx.commit("updateCountries", countries);
    },
    async fetchCurrentCountry(ctx, currentCountry) {
      const response = await fetch(
        `https://restcountries.com/v2/name/${currentCountry}`
      );
      let infoCountry = await response.json();
      ctx.commit("updateCurrentCountryInfo", infoCountry);
    },
  },
  mutations: {
    updateCountries(state, countries) {
      state.allCountries = countries;
    },
    updateCurrentCountry(state, currentCountry) {
      state.currentCountry = currentCountry;
    },
    updateCurrentCountryInfo(state, currentCountryInfo) {
      state.currentCountryInfo = currentCountryInfo;
    },
    updateInputValue(state, value) {
      state.inputValue = value;
    },
    updateSelectValue(state, value) {
      state.selectValue = value;
    },
  },
};
export default restCountriesStore;
