<template>
  <div class="my-btn" @click="btnEvent">{{txt}}</div>
</template>

<script>
export default {
    name: 'myBtn',
    props: {
        txt: {
            default: '按钮'
        }
    },
    methods: {
        btnEvent: function(){
            console.log(this.txt);
            this.$emit('btnEvent');
        }
    },
    data: function(){
        console.log(2)
        console.log(this)
        return {
            btnCnt: this.txt
        }
    }
}
</script>

<style lang="scss">
.my-btn{
    display: inline-block;
    width: 200px;
    height: 200px;
    line-height: 200px;
    background: #f00;
    color: #fff;
    text-align: center;
    vertical-align: top;
}
</style>

