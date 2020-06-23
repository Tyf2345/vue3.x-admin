<template>
<h3>饼图系列</h3>
  <div class="line-wrapper">
    <div class="line charts" v-for="(item, i) in lineData" :key="i">
      <line-chart :data="item"></line-chart>
    </div>
  </div>
</template>
<script>
import { ref, onBeforeMount } from "vue";
import { getLineData } from "../../../mock/charts";
import LineChart from "../../../components/charts/line";
export default {
  components: {
    LineChart
  },
  setup() {
    
    let lineData = ref([]);
    onBeforeMount(async () => {
      lineData.value = await getLineData;
    });
    return {
      lineData
    };
  }
};
</script>
<style lang="less" scoped>
.line-wrapper {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  .line {
    width: 50%;
    height: 300px;
  }
}
</style>