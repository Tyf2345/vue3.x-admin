<template>
  <div class="component-line" ref="line"></div>
</template>
<script>
import { ref, onMounted } from "vue";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";
export default {
  props: {
    data: Object
  },
  setup(props) {
    const line = ref(null);
    onMounted(() => {
      let el = echarts.init(line.value);
      getLine(el);
    });
    function getLine(el) {
      const { x = [], y = [], title = "折线图" } = props.data;
      let _option = option(x, y, title);
      el.setOption(_option);
    }
    function option(x, y, title) {
      return {
        title: {
          text: title
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          data: x
        },
        yAxis: {
          type: "value"
        },
        series: y
      };
    }
    return {
      line
    };
  }
};
</script>
<style lang="less" scoped>
.component-line {
  width: 100%;
  height: 100%;
}
</style>