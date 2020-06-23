<template>
<h3>鼠标移上去有惊喜</h3>
  <div class="icon-wrapper">
    <div v-for="item in iconArr" :key="item.id" class="icon colorfff">
      <span :class="`iconfont ${item.name} ${item.icon}`"></span>
      <span>{{item.name}}</span>
    </div>
  </div>
</template>
<script>
import { ref, onBeforeMount } from "vue";
import { getIconData } from "../../mock/icon";
export default {
  setup() {
    let iconArr = ref();
    onBeforeMount(async () => {
      iconArr.value = await getIconData;
    });
    return {
      iconArr
    };
  }
};
</script>
<style lang="less" scoped>
.icon-wrapper {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  .icon {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 30%;
    margin-right: 3%;
    margin-bottom: 15px;
    height: 60px;
    align-items: center;
    background: yellowgreen;
    border-radius: 4px;
    transition: all 1.2s ease;
    &:hover {
      transform: scale(1.1, 1.1);
      width: 33%;
      color: red;
      background-color: blue;
    }
  }
}
</style>