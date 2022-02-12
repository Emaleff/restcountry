<template>
  <div class="container" v-if="open">
    <router-link :to="{ name: 'main' }" class="back">
      <svg
        width="19"
        height="12"
        viewBox="0 0 19 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z"
        />
      </svg>
      <span> Back</span>
    </router-link>
    <div class="country">
      <div class="country__flag">
        <img :src="currentCountry.flags.png" alt="" />
      </div>
      <div class="country__text">
        <div class="country__name">
          {{ currentCountry.name.common }}
        </div>
        <div class="country__words">
          <div class="country__word">
            <div class="country__word-item">
              Native Name: {{ currentCountry.name.official }}
            </div>
            <div class="country__word-item">
              Population: {{ currentCountry.population }}
            </div>
            <div class="country__word-item">
              Region: {{ currentCountry.region }}
            </div>
            <div class="country__word-item">
              Sub Region:
              {{ currentCountry.subregion }}
            </div>
            <div class="country__word-item">
              Capital: {{ currentCountry.capital[0] }}
            </div>
          </div>
          <div class="country__word">
            <div class="country__word-item">
              Top Level Domain: {{ currentCountry.tld[0] }}
            </div>
            <div class="country__word-item">
              Currencies: {{ Object.keys(currentCountry.currencies)[0] }}
            </div>
            <div class="country__word-item">
              Languages:
              <span v-for="lang in currentCountry.languages" :key="lang">
                {{ lang }}</span
              >
            </div>
          </div>
        </div>
        <div class="country__borders" v-if="currentCountry.borders">
          <span class="country__border-title"> Border Countries: </span>
          <span
            v-for="(border, idx) in currentCountry.borders"
            :key="idx"
            class="country__border-item"
          >
            {{ border }}
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="loader" v-else>
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentCountry: {},
      open: false,
    };
  },
  async created() {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${this.country}`
    );
    let infoCountry = await response.json();
    this.currentCountry = infoCountry[0];
    this.open = true;
  },
  name: "InfoCountry",
  props: {
    country: {
      type: String,
      default: function () {
        this.$router.push("/");
        return "";
      },
    },
  },
  methods: {},
};
</script>

<style scoped>
.loader {
  margin-top: 100px;  
  display: flex;
  justify-content: center;
  align-items: center;
}
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #cef;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}
.back {
  display: block;
  text-decoration: none;
  margin-top: 90px;
  color: #ffffff;
  width: 136px;
  height: 40px;
  box-sizing: border-box;
  background: #2b3844;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
  border-radius: 6px;
  padding: 10px;
  text-align: center;
}
.isLightTheme .back {
  background: #ffffff;
  color: #111517;
}
.back svg path {
  fill: #ffffff;
}
.isLightTheme .back svg path {
  fill: #111517;
}
.back svg {
  margin-right: 10px;
  transition: 0.3s;
}
.back:hover {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.293139);
}
.back:hover svg {
  transform: scale(1.5);
  transition: 0.3s;
}
.country {
  padding: 80px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.country__flag {
  flex-shrink: 0;
  border-radius: 5px;
  overflow: hidden;
}
.country__flag {
  margin-bottom: 30px;
  width: 560px;
  height: 400px;
}
.country__flag img {
  width: 100%;
  height: 100%;
}
.country__text {
  display: flex;
  margin-left: 145px;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
}
.country__name {
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 23px;
}
.country__words {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.country__word-item {
  font-size: 16px;
  line-height: 32px;
  font-family: NunitoSans;
  font-size: 16px;
  line-height: 32px;
}
.country__word-item span {
  font-family: NunitoSans;
}
.country__borders {
  margin-top: 70px;
}
.country__border-item {
  background: #2b3844;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
  border-radius: 2px;
  margin: 0 5px;
  padding: 0 20px;
  line-height: 24px;
}
.isLightTheme .country__border-item {
  background: #ffffff;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
}
@media screen and (max-width: 1150px) {
  .country__text {
    margin-left: 25px;
  }
}
@media screen and (max-width: 1020px) {
  .country {
    flex-direction: column;
  }
}
@media screen and (max-width: 600px) {
  .country {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  .country__flag {
    width: 300px;
    height: 200px;
  }
  .country__text {
    width: 100%;
  }
  .country__words {
    flex-direction: column;
    align-items: flex-start;
  }
  .country__border-title {
    display: block;
  }
}
</style>
