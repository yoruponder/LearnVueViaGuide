<template>
  <div class="idx-page">
    <wiki-head :id="navigation_id" :route="route" />
    <top-info :info="info" />
    <div class="com-width">
      <div class="index-left">
        <hot-point :data="hot_issue"/>
      </div>
      <right-block :id="navigation_id" />
    </div>
  </div>
</template>

<script>
import wikiHead from "_COMP_/header";
import topInfo from "_COMP_/topInfo";
import hotPoint from "_COMP_/hotPoint";
import rightBlock from "_COMP_/rightBlock";

export default {
  name: "idx",
  components: {
    wikiHead,
    topInfo,
    hotPoint,
    rightBlock
  },
  data() {
    return {
      info: {
        solution:   "N/A",
        wait:       "N/A",
        online:     "N/A"
      },
      hot_issue:    [],
      category:     [],
      navigation_id:this.$route.params.id ? this.$route.params.id : '1',
      route:        this.$route
    };
  },
  methods: {
    requestData() {
      ajax.post(Api, { c: "index", a: "index", navigation_id: 1 }).then(res => {
        this.info       = res.data.headinfo;
        this.hot_issue  = res.data.hot_issue;
        this.category   = res.data.category;
      });
    }
  },
  beforeMount: function() {
    this.requestData();
  },
  mounted: function(){

  }
};
</script>


