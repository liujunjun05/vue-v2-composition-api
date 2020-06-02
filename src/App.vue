<template>
  <div id="app">
    <h3>{{ state.title }}</h3>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/list">List</router-link> |
      <router-link to="/api">composition-api</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api'

export default {
  setup () {
    const state = reactive({
      title: 'Hello world'
    })
    return {
      state
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
