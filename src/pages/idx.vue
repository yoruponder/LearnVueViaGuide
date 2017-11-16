<template>
  <div class="main-page">
    <p>{{num}}</p>
    <my-btn :txt="btn1name" @btnEvent="dosth">
      <img slot="icon" src="/static/logo.png" style="width:20px;height:20px;"/>
    </my-btn>
    <my-btn :txt="0" @btnEvent="dosth" />  
    <my-btn txt="sdfsdf"/>
    <router-link to="page1">page12</router-link>
    <router-link to="page2">page22</router-link>
    <router-link to="page3">page33</router-link>
    <a href="javascript:;" @click="requestData">請求資源</a>
  </div>
</template>

<script>
import myBtn from '_COMP_/btn'

export default {
  name: 'idx',
  components:{
    myBtn
  },
  computed: {
    btn1name: function(){
      return this.num += 1;
    }
  },
  methods: {
    dosth: function(){
      this.num += 1;
    },
    requestData(){
      ajax.get('http://localhost:3000/api/test2').then((res)=>{
        console.log(res);
      });
    }

  },
  data () {
    return {
      num: 0
    }
  }
}
</script>


