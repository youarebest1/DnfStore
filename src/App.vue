<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="$route.meta.footShow"></Footer>
  </div>
</template>

<script>
import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>

</style>
