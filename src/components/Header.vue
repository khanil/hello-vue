<template>
  <header>
    <router-link to="/" class="brand-logo">
      <img alt="Vue logo" src="../assets/logo.png">
    </router-link>

    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/search">Search</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'app-header',
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  padding: 15px 0 14px;
  border-bottom: 1px solid $border-color;
}

.brand-logo {
  margin-right: 35px;

  img {
    width: 25px;
    height: 25px;
  }
}

li + li {
  margin-left: 20px;
}
</style>
