<template>
  <div class="dashboard">
    <Header></Header>
    <div class="dashboard__content">
      <Nav class="Nav"></Nav>
      <router-view class="dashboard__sub"></router-view>
    </div>
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
  width: 20%;
  height: calc(100vh - 4.5rem);
  overflow-y: scroll;
  display:inline-block;
}

.dashboard__content{
  display:flex;
}

.dashboard__sub{
  width:80%;
  display:inline-block;
  height:calc(100vh - 4.5rem);
  overflow-y: scroll;
}
</style>
