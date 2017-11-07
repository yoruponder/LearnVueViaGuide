<template>
  <div class="main-page">
    <my-btn :txt="btn1" v-on:btnEvent="dosth" />  
    <my-btn txt="page22" />  
    <my-btn />
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
      this.btn1 += 1;
    }
  },
  data () {
    return {
      btn1: 1
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


