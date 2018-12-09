<template>
  <div class="dashboard">
    <Header></Header>
    <Nav class="Nav"></Nav>
  </div>
</template>

<script>

// @ is an alias to /src
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
export default {
  name: 'Dashboard',
  components: {
    Header,
    Nav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.Nav{
  max-width: 20%;
  max-height: calc(100vh - 4.5rem);
  overflow-y: scroll;
}
</style>
