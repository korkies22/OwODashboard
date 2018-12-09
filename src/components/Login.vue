<template>
  <section class="Login">
    <h1>Login to OwO Dashboard</h1>
    <div class="form">
        <div class="form__group">
            <input type="text" class="form__input" placeholder="User" id="name" required>
            <label for="name" class="form__label">User</label>
            <img class="form__icon" src="../../public/user.svg"/>
        </div>

        <div class="form__group">
            <input type="password" class="form__input" placeholder="Password" id="password" required>
            <label for="password" class="form__label">Password</label>
            <img class="form__icon" src="../../public/password.svg"/>
        </div>
    <button class="btn btn--orange" @click="login">
        Log in
    </button>
    </div>
  </section>
</template>

<script>
export default {
    name:"Login",
    methods: {
    login: function () {
      // `this` inside methods point to the Vue instance
      alert('Loginsito')
    }
  }
}
</script>


<style scoped lang="scss">
$font: 'Poppins', sans-serif;
::selection { background-color: #C3CFE2; }
.Login{
    margin:8rem auto;
    min-height: 30rem;
    box-shadow: 0 2rem 6rem rgba(0,0,0,0.3);
    background:rgb(245, 192, 80);    
    max-width: 80rem;
    padding: 2rem;
    background:linear-gradient(rgba(0, 149, 162,.8), rgba(0, 149, 162,.8)), url("../../public/login_background.jpg") no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: contain;

}



h1{
	background: linear-gradient(to bottom, #fc8e17 0%, #f5c050 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
    margin: 0;
    padding: 1rem 0;
	font: {
		family: $font;
        size: 3rem;
	};
}

.btn{
    margin: 1rem auto;
}
.form{
    text-align: start;
    margin: 1rem auto;
    margin-left: 15%;
    &__group:not(:last-child) {
        margin-bottom: 3rem;
    }

    &__group{
        position:relative;
    }

    &__group:first-child {
        margin-top: 2rem;
    }

    &__icon {
        margin-left:2rem;
        width: 70px;
        display:inline-block;
        vertical-align: middle;
        filter: invert(1);
    }

    &__input {
        vertical-align: middle;
        font-size: 1.5rem;
        font-family: inherit;
        color: inherit;
        padding: 1.5rem 2rem;
        border-radius: 2px;
        background-color: rgba(white, 1);
        border: none;
        border-bottom: 3px solid transparent;
        width: 50%;
        display: inline-block;
        transition: all .3s;

        &:focus {
            outline: none;
            box-shadow: 0 1rem 2rem rgba(black, .1);
            border-bottom: 3px solid #fc8e17;
        }

        &:focus:invalid {
            border-bottom: 3px solid rgb(164, 0, 123);
        }

        &::-webkit-input-placeholder {
            color: #b8b9ba;
        }
    }


    &__label {
        font-size: 0.8rem;
        font-weight: 700;
        margin-left: 2rem;
        margin-top: .7rem;
        display: inline-block;
        transition: all .3s;
        position:absolute;
        left:0;
        bottom:0;
        color:white;
        transform: translateY(2rem);
    }

    &__input:placeholder-shown + &__label {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-2rem);
    }
}
</style>
