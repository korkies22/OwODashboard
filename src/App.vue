<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body{
  margin:0;
}
html{
  margin:0;
  height:100%;
  width:100%;
}
*{
  box-sizing: border-box;
}

body.login {
    background:#fc8e17;
}
body.dashboard {
    background: white;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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

.btn {
    &,
    &:link,
    &:visited {
        text-transform: uppercase;
        text-decoration: none;
        padding: 1.5rem 4rem;
        display: inline-block;
        border-radius: 10rem;
        transition: all .2s;
        position: relative;
        font-size: 1rem;
        font-weight: bold;
        //Change for the <button> element
        border: none;
        cursor: pointer;
    }
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(#000,.2);

        &::after {
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }
    
    &:active,
    &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 .5rem 1rem rgba(#000,.2);
    }
    
    &--white {
        background-color: #eee;
        color: #777;

        &::after {
            background-color: #eee;
        }
    }

    &--orange {
        background-color: #fc8e17;
        color: #eee;

        &::after {
            background-color: #fc8e17;
        }
    }
    
    &::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 10rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s;
    }
    
    &--animated {
        animation: moveInBottom .5s ease-out .75s;
        animation-fill-mode: backwards;
    }
}
</style>
