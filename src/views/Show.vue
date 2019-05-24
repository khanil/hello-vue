<template>
  <div>
    <template v-if="this.loading">Loading</template>

    <template v-else-if="this.error">
      <p>
        <strong>Error occurred:</strong>
        {{this.error}}
      </p>
    </template>

    <template v-else>
      <h1>{{this.show.name}}</h1>
      <p v-html="this.show.summary"></p>
      <img
        v-if="this.show.image "
        :src="this.show.image.medium"
        :alt="`${this.show.name} show image`"
      >
    </template>
  </div>
</template>

<script>
import { fetchShow } from '@/lib/api';

export default {
  name: 'show',
  data: () => ({
    show: {
      name: '',
      summary: '',
      image: {
        medium: '',
      },
    },
    error: null,
    loading: false,
  }),
  async mounted() {
    const { id } = this.$route.params;
    this.loading = true;

    try {
      const show = await fetchShow(id);
      this.show = await show.json();
    } catch (error) {
      this.error = error.message;
    }

    this.loading = false;
  },
};
</script>
