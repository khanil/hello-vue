<template>
  <div>
    <form v-on:submit="search">
      <input type="search" placeholder="Start searching for TV show..." v-model="query">
      <button type="submit">Search</button>
    </form>

    <Results v-bind:results="results"/>
  </div>
</template>

<script>
import Results from '@/components/search/Results.vue';
import { searchForShows } from '@/lib/api';

export default {
  data: () => ({
    query: 'batman',
    results: [],
  }),
  methods: {
    async search(e) {
      e.preventDefault();

      try {
        const response = await searchForShows(this.query);
        const data = await response.json();
        this.results = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: {
    Results,
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  width: 100%;
}

input[type='search'] {
  flex-grow: 1;
}
</style>
