<template>
  <div id="app" class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    padding-top: 30px;
  }

  .navbar {
    margin-top: 30px;
    margin-bottom: 30px;
  }
</style>
