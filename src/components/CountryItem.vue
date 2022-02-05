<template>
  <router-link
    :to="{ name: 'info', params: { country: country.name.common } }"
    class="item"
    v-if="country"
  >
    <div class="item__img">
      <img :src="country.flags.png" alt="" />
    </div>
    <div class="item__info">
      <div v-if="country" class="item__title">{{ country.name.common }}</div>
      <div v-if="country" class="item__population">
        Population: {{ country.population }}
      </div>
      <div v-if="country" class="item__region">
        Region: {{ country.region }}
      </div>
      <div v-if="country.capital" class="item__capital">
        Capital: {{ country.capital[0] }}
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CountryItem",
  props: {
    country: {
      type: Object,
      // required: true,
    },
  },
};
</script>

<style scoped>
.item {
  margin: 25px 0;
  width: 264px;
  height: 336px;
  box-sizing: border-box;
  background: #2b3844;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  border-radius: 5px;
  overflow: hidden;
  text-decoration: none;
}
.isLightTheme .item {
  background: #ffffff;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
}
.item:hover {
  cursor: pointer;
}
.item__img {
  width: 100%;
  height: 160px;
}
.item__img img {
  width: 100%;
  height: 100%;
}
.item__info {
  padding: 24px;
}

.item__title {
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
  margin-bottom: 16px;
}
.item__population,
.item__region,
.item__capital {
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  margin-bottom: 8px;
  font-family: NunitoSans;
}
.isLightTheme .item__title,
.isLightTheme .item__population,
.isLightTheme .item__region,
.isLightTheme .item__capital {
  color: #111517;
}
@media screen and (max-width: 1200px) {
  .item {
    margin: 25px 10px;
  }
}
</style>
