<template>
  <div>
    <p v-if="results.length" class="result-summary">Found {{results.length}} shows:</p>

    <ul>
      <li v-for="result in results" v-bind:key="result.id">{{result.show.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'results',
  props: ['results'],
};
</script>

<style lang="scss" scoped>
.result-summary {
  border-bottom: 1px solid #aaa;
  padding: 10px 0;
}

ul {
  flex-direction: column;
  margin-top: 10px;

  li + li {
    margin-top: 15px;
  }
}
</style>
