<template>
    <h3>益智小游戏 -- 贪吃 🐍</h3>
  <div class="map-wrapper">

    <div class="map" ref="map"></div>
    <span class="cursorP" @click="restart">{{text}}</span>
  </div>
</template>
<script>
import { ref, onUnmounted } from "vue";
import Game from "./components";
export default {
  setup() {
    let map = ref(null);
    let text = ref("  请开始你的表演");
    let _game = ref(null);
    onUnmounted(() => {
      _game.value && _game.value.removeKeyCode();
    });
    //初始化
    function game() {
      _game.value = new Game(map.value);
     _game.value.init()
    }
    //重新开始
    function restart() {
      text.value = "再来一把么";
      game();
    }
    return {
      text,
      map,
      restart
    };
  }
};
</script>
<style lang="less" scoped>
.map-wrapper {
  display: flex;
}
.map {
  width: 800px;
  height: 600px;
  position: relative;
  background-color: #ccc;
}
</style>