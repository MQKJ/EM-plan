<template>
  <div class="hello">
    <img src="../assets/images/logo.png" height="200" width="200" alt="">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'guide',
  data () {
    return {
      msg: 'Welcome to guide page'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
