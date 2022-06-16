<template>
  <div class="home">
    <h1>
      All Destinations
      <p>{{ doubleCount }}</p>
      {{ number }}
    </h1>
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug },
          }"
        >
          <h2>{{ destination.name }}</h2>
        </router-link>
        <figure>
          <router-link
            :to="{
              name: 'DestinationDetails',
              params: { slug: destination.slug },
            }"
          >
            <img
              :src="require(`@/assets/${destination.image}`)"
              :alt="destination.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from "vuex";
import store from "@/store.js";

export default {
  name: "home",
  computed: {
    ...mapGetters(['doubleCount','tripleCount']),
    Count() {
      // $storeとする事でどこからでも呼べるようになる
      return this.$store.getters.counter;
    },
    number(){
      return this.$store.state.number;
    },
  },
  methods:{
    increment(){
      this.$store.dispatch('increment',2);
    }
  },
  data() {
    return {
      destinations: store.destinations
    }
  },
};
</script>
<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}
img {
  max-width: 200px;
}
.destinations {
  display: flex;
  justify-content: space-between;
}
a {
  color: lightseagreen;
  text-decoration: none;
}
a:hover,
a:visited {
  text-decoration: underline;
}
</style>
