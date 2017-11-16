<template>
<div :class="['my-btn']" @click="btnEvent">
    <slot name="icon"></slot>
    <p>{{btnCnt}}</p>
</div>
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
            this.btnCnt += 1;
            this.$emit('btnEvent');
        }
    },
    data: function(){
        return {
            btnCnt: this.txt,
            clkstate: 0,
        }
    }
}
</script>

<style lang="scss">
.my-btn{
    display: inline-block;
    width: 200px;
    height: 200px;
    background: #f00;
    color: #fff;
    text-align: center;
    vertical-align: top;
}
</style>

