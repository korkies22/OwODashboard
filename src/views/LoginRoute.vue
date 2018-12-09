<template>
  <div class="loginRoute">
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import store from '@/store'
export default {
  name: 'LoginRoute',
  components: {
    Login
  },
  beforeRouteEnter (to, from, next) { 
    if(!store.getters['isLogged']){
      next()
    } 
    else{
      next('/')
    }
  },
  beforeCreate: function() {
      document.body.className = 'login';
  }
}
</script>

<style lang="scss">
</style>
