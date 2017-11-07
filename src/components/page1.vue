<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="sew" v-bind:title="ss">asda</div>
    <p v-if="go">aaaa</p>
    <div class="list" v-for="v in list" v-bind:key="v.id">
      {{v.a}}
    </div>
    <span v-on:click="showall">show</span>
    <p>{{showLen}}</p>
    <!-- <list-data v-for="item in list" v-bind:key="item.id" v-bind:item="list"></list-data> -->
  </div>
</template>

<script>

var child = {
  props: ['item'],
  template: '<div>{{ console.log(item) }}</div>'
};
export default {
  name: 'Page1',

  methods: {
    showall:function(){
      console.log(this)
    }
  },
  created: function(){
    //console.log($data)
  },
  // components: {
  //   'list-data': child
  // },
  computed:{
    showLen: function(){
      let a = this.list.length;
      //console.log(this);
      return a
    }
  },
  data () {
    console.log(this)
    return {
      msg: 'Welcome to page1',
      ss: new Date().toLocaleString(),
      go: 0,
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
