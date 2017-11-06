<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="sew" v-bind:title="ss">asda</div>
    <p v-if="go">aaaa</p>
    <div class="list" v-for="v in list" v-bind:key="v.id">
      {{v.a}}
    </div>
    <span v-on:click="showall">show</span>
  </div>
</template>

<script>
export default {
  name: 'Page1',
  methods:{
    showall:function(){
      console.log(this)
    }
  },
  data () {
    return {
      msg: 'Welcome to page1',
      ss: new Date().toLocaleString(),
      go: 1,
      list: [
        {a:111},
        {a:223},
        {a:44}
      ]
    }
  }
}
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
