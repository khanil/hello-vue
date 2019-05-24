<template>
  <div>
    <form v-on:submit="search">
      <input
        name="query"
        type="search"
        placeholder="Start searching for TV show..."
        :value="this.$route.query.q"
      >
      <button type="submit">Search</button>
    </form>

    <Results v-bind:results="results"/>
  </div>
</template>

<script>
import Results from '@/components/search/Results.vue';
import { searchForShows } from '@/lib/api';

async function search(query) {
  try {
    const response = await searchForShows(query);
    const data = await response.json();
    this.results = data;
  } catch (error) {
    console.log(error);
  }
}

export default {
  data: () => ({
    results: [],
  }),
  methods: {
    async search(e) {
      e.preventDefault();
      const q = e.target.query.value;
      this.$router.replace({ name: 'search', query: { q } });
    },
  },
  async mounted() {
    const query = this.$route.query.q || '';
    await search.call(this, query);
  },
  async beforeRouteUpdate(to, from, next) {
    const query = to.query.q || '';
    await search.call(this, query);
    next();
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
