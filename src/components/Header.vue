<template>
  <div class="header">
    <div/>
    <h1>OwO Dashboard</h1>
    <button>Sign out</button>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


$font: 'Poppins', sans-serif;

::selection { background-color: #C3CFE2; }

.dashboard{
    width:100%;
    border:1px solid #eee;
}

h1{
	background: linear-gradient(to bottom, #fc8e17 0%, #f5c050 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
  margin: 1rem 0;
	font: {
		family: $font;
	};
}


.header{
    width:100%;
    border:1px solid #eee;
    display:flex;
    align-items: center;
}

.header > div:first-child {
  margin-right: auto;
  visibility: hidden;
}

h1{
	background: linear-gradient(to bottom, #fc8e17 0%, #f5c050 100%);
	-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  align-self: center;
  margin: 1rem auto;
	font: {
		family: $font;
	};
}

button{
  float:right;
  background:#fc8e17;
  border:1px solid white;
  margin-left:auto;
  color:white;
  font-size:1rem;
  border-radius: 10%;
  height: 2.5rem;
  margin-right: 1rem;
}
</style>
