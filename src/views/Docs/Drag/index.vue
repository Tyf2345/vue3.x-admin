<template>
  <h3>可拖拽div</h3>
  <div class="drag-wrapper" ref="dargWrap">
    <div
      class="drag"
      v-for="item in 10"
      :key="item"
      @mousedown="mousedown"
      @mouseup="mouseup"
    >拖拽{{item}}</div>
  </div>
</template>
<script>
import { ref, reactive, onMounted } from "vue";
export default {
  setup() {
    /**
     * dargWrap ==》 包裹拖拽元素的大div
     * zIndex ==》 拖拽是权重
     * dargWrapObj ==》 大div offsetLeft 和 offsetTop
     */
    let dargWrap = ref(null);
    let zIndex = ref(1);
    let dargWrapObj = reactive({});
    onMounted(() => {
      // 获取大div距离左侧和顶部的距离（用于处理拖拽时的边界问题）
      dargWrapObj = {
        _offsetLeft: dargWrap.value.offsetLeft,
        _offsetTop: dargWrap.value.offsetTop
      };
    });

    function mousedown(e) {
      // 设置div权重
      zIndex.value++;

      let _target = e.target;
      // _target.style.left==‘’xx.px'',要改为 typeof xx  ==>number
      // 获取当前div 自身的偏移量left和top
      let targetL = Number.parseFloat(_target.style.left) || 0;
      let targetT = Number.parseFloat(_target.style.top) || 0;
      // 获取当前div距左侧和顶部的距离
      let _clientX = e.clientX;
      let _clientY = e.clientY;
      //获取此时的可视区域的横坐标-此时登录框距离左侧页面的横坐标
      let spaceX = _clientX - _target.offsetLeft;
      let spaceY = _clientY - _target.offsetTop;

      const { _offsetLeft, _offsetTop } = dargWrapObj;
      // 鼠标移动事件
      document.onmousemove = function(ev) {
        //获取鼠标移动时距左侧和顶部的距离
        let clentX = ev.clientX;
        let clentY = ev.clientY;
        // 计算 x、y的实际偏移量
        let x = clentX - _clientX + targetL;
        let y = clentY - _clientY + targetT;
        // 判断边界 左侧和顶部（超出则不作处理）
        if (clentX - spaceX >= _offsetLeft && clentY - spaceY >= _offsetTop) {
          // 将数据绑定到dom元素上
          _target.style.left = x + "px";
          _target.style.top = y + "px";
          _target.style.zIndex = zIndex.value;
          // 添加class属性 dragFlag ==>阴影
          _target.classList.add("dragFlag");
        }
      };
    }
    // 鼠标抬起
    function mouseup(e) {
      // 移除class属性 dragFlag ==>阴影
      e.target.classList.remove("dragFlag");
      // 清除鼠标移动事件
      document.onmousemove = null;
    }
    return {
      dargWrapObj,
      dargWrap,
      mousedown,
      mouseup
    };
  }
};
</script>
<style lang="less" scoped>
.drag-wrapper {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  .drag {
    position: relative;
    width: 30%;
    text-align: center;
    margin-right: 3%;
    margin-bottom: 15px;
    height: 50px;
    line-height: 50px;
    background: yellowgreen;
    border-radius: 4px;
    cursor: pointer;
  }
  .dragFlag {
    box-shadow: 0 0 10px 10px pink;
  }
}
</style>