<template>
  <nav class="navigation__nav">
    <ul class="navigation__list">
      <li class="navigation__item">
        <router-link tag="a" class="navigation__link" to="/dashboard/botInteraction">Interacción con el Bot</router-link>
      </li>
      <li class="navigation__item"> 
        <router-link tag="a" class="navigation__link" to="/dashboard/campus">Uso acceso a Campus</router-link>
      </li>
      <li class="navigation__item">
        <router-link tag="a" class="navigation__link" to="/dashboard/events">Agregar eventos</router-link>
      </li>
      <!--<li class="navigation__item">
        <router-link tag="a" class="navigation__link" to="/dashboard/sleep">Tiempo de sueño</router-link>
      </li>-->
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<!-- Add "scoped" attribute to li class="navigation__item"mit CSS to this component only -->
<style scoped lang="scss">

.navigation{

    &__nav {
        width:100%;
        border:1px solid #eee;
    }

    &__list {
        list-style: none;
        text-align: center;
        width: 100%;
        height:100%;
        padding:0;
        margin:0;
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    &__link {
        &:link,
        &:visited {
            display: inline-block;
            font-size: 1.5rem;
            font-weight: 300;
            width:100%;
            padding: 2rem 1.5rem;
            color: #fc8e17;
            text-decoration: none;
            background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fc8e17 50%);
            background-size: 240%;
            transition: all .4s;
            transform: translateX(-1rem);
            span {
                display: inline-block;
            }
        }
        
        &:hover,
        &:active {
            background-position: 100%;
            color: white;
            transform: translateX(0rem);
        }
    }
}
::-webkit-scrollbar { 
    display: none; 
}




</style>
