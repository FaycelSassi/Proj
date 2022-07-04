<template>
  <div id="app">
    <NavB />
    <LogV />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import NavB from './components/NavB.vue'
import LogV from './components/Login.vue'
export default {
  name: 'App',
  components: {
    NavB,
    LogV
  }
}
</script>

<style>
</style>
