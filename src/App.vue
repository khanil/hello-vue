<template>
  <div id="app">
    <Header/>

    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: { Header },
};
</script>


<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: $font-family-default;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color;
}

ul {
  display: flex;
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

a {
  color: $link-color;
  text-decoration: $link-text-decoration;

  &:hover,
  &:focus,
  &:active {
    color: $link-hover-color;
  }

  &:focus,
  &:active {
    outline: none;
  }
}

input,
button {
  padding: $input-btn-padding-y $input-btn-padding-x;
  font-size: $input-btn-font-size;
  line-height: $input-btn-line-height;

  &:active,
  &:focus {
    outline: none;
  }
}

input {
  border: $input-border;
  color: $input-color;

  &:active,
  &:focus {
    box-shadow: $input-focus-box-shadow;
  }
}

button {
  border: $btn-border;
  background-color: $btn-bg-color;
  color: $btn-color;

  &:active,
  &:focus {
    box-shadow: $btn-focus-box-shadow;
  }
}

#app {
  margin: 0 auto 20px;
  padding: 0 20px;
  max-width: 768px;
}
</style>
