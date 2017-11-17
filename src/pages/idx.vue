<template>
  <div class="idx-page">
    <wiki-head />
    <p>{{num}}</p>
    <my-btn :txt="123" @parentEvent="dosth">
      <img slot="icon" src="/static/logo.png" style="width:20px;height:20px;"/>
    </my-btn>
    <my-btn :txt="456" @parentEvent="dosth" />  
    <my-btn txt="sdfsdf"/>
    <div class="flexbox">
      <router-link to="page1">page12</router-link>
    </div>
    <a href="javascript:;" @click="requestData">請求資源</a>
  </div>
</template>

<script>
import myBtn from '_COMP_/btn'
import wikiHead from '_COMP_/header'

export default {
  name: 'idx',
  components:{myBtn, wikiHead},
  data () {
    console.log(2222)
    return {
      num:  0,
      btn1: 0,
      btn2: 5
    }
  },
  computed: {
    btn1name: function(){
      return this.num += 1;
    }
  }, 
  methods: {
    dosth: function(a,b){
      
      this.num += 1;
    },
    requestData(){
      ajax.get('http://localhost:3000/api/test2').then((res)=>{
        console.log(res);
      });
    }
  }
}
</script>


