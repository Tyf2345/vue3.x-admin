<template>
<h3>柱图系列</h3>
  <div class="bar-wrapper">
    <div class="bar charts" v-for="(item, i) in barData" :key="i">
      <bar-chart :data="item"></bar-chart>
    </div>
  </div>
</template>
<script>
import BarChart from "../../../components/charts/bar";
import { ref, onMounted } from "vue";
import { getBarData } from "../../../mock/charts";
export default {
  components: {
    BarChart
  },
  setup() {
    const barData = ref([]);
    onMounted(async () => {
      // 调用数据
      barData.value = await getBarData;
    });
    return {
      barData
    };
  }
};
</script>
<style lang="less" scoped>
.bar-wrapper {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  .bar {
    width: 50%;
    height: 300px;
  }
}
</style>