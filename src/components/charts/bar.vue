<template>
  <div class="component-bar" ref="bar"></div>
</template>
<script>
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
// import "echarts/lib/component/axisPointer"
import { ref, onMounted } from "vue";
export default {
  props:{
    data:Object
  },
  setup(props) {

    let bar = ref(null);
    onMounted(() => {
      barCharts();
    });
    function barCharts() {
          const { x={},y={},title='柱状图',name='销量' } = props.data
      var myChart = echarts.init(bar.value);
      // 绘制图表
      myChart.setOption({
        title: {
          text: title
        },
        tooltip: {},
        xAxis: {
          data: x
        },
        yAxis: {},
        series: [
          {
            name: name,
            type: "bar",
            data: y
          }
        ]
      });
    }
    return {
      bar
    };
  }
};
</script>
<style lang="less" scoped>
.component-bar {
  width: 100%;
  height: 100%;
}
</style>