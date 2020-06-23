<template>
<h3>首页展示点啥</h3>
  <div class="home-wrapper">
    <div class="home charts" v-for="(item, i) in barData" :key="i">
      <bar-chart :data="item"></bar-chart>
    </div>
    <div class="home charts" v-for="(item, i) in lineData" :key="i">
      <line-chart :data="item"></line-chart>
    </div>
  </div>
</template>
<script>
import BarChart from "../../components/charts/bar";
import { ref, onMounted } from "vue";
import { getBarData,getLineData } from "../../mock/charts";
import LineChart from "../../components/charts/line";
export default {
  components: {
    BarChart,
    LineChart
  },
  setup() {
    const barData = ref([]);
     let lineData = ref([]);
    onMounted(async () => {
      // 调用数据
      barData.value = (await getBarData).slice(0,2);
      lineData.value = (await getLineData).slice(0,2);
    });
     
    return {
      barData,
      lineData
    };
  }
};
</script>
<style lang="less" scoped>
.home-wrapper {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  .home {
    width: 50%;
    height: 300px;
  }
}
</style>