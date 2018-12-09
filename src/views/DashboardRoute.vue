<template>
  <div class="dashboardRoute">
    <Dashboard/>
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard.vue'
import store from '@/store'
export default {
  name: 'DashboardRoute',
  components: {
    Dashboard
  },
  beforeRouteEnter (to, from, next) {
    if(store.getters['isLogged']){
      next()
    } 
    else{
      next('/Login')
    }
  },
  beforeCreate: function() {
      document.body.className = 'dashboard';
  }
}
</script>

<style scoped lang="scss">

$font: 'Poppins', sans-serif;

::selection { background-color: #C3CFE2; }

h1{
	background: linear-gradient(to bottom, #fc8e17 0%, #f5c050 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
    margin: 1rem 0;
	font: {
		family: $font;
	};
}
</style>

<style lang="scss">

body{
    background:white;
}
</style>
