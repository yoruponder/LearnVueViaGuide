<template>
  <div class="main-page">
    <p>{{num}}</p>
    <my-btn :txt="0" v-on:btnEvent="dosth" />  
    <my-btn :txt="0" v-on:btnEvent="dosth" />  
    <my-btn :txt="232"/>
    <router-link to="page1">page1</router-link>
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
      return ++this.btn1;
    }
  },
  methods: {
    dosth: function(){
      this.num += 1;
    }
  },
  data () {
    return {
      num: 0
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


