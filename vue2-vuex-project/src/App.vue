<template>
  <div id="app">
    <nav>
      <router-link to="/user-profile">User Profile</router-link>
      <router-link to="/product-list">Product List</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
nav {
  display: flex;
  gap: 10px;
}
</style>
