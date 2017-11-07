<template>
    <div class="aaa">
        {{aa}}{{data}}
    </div>
</template>

<script>
export default {
  name: 'myComponent',
  props: ['data'],
  data: function(){
      return {
          aa: 2222
      }
  }
}
</script>

