<template>
  <aside class="h100 aside" :style="{width:asideFlag?'200px':'55px'}">
    <ul>
      <div>
        <template v-for="(item, i) in treeData">
          <template v-if="!item.children">
            <li
              :class="activeRouter ===item.path ? 'positionR router-link-active':'item-li colorfff positionR'"
              :key="i"
              @click="handleClickRouter(item)"
            >
              <p class="item item-p pd0-20">
                <span :class="'icon-l iconfont '+item.icon" :title="asideFlag? '':item.name"></span>
                <span>{{item.name}}</span>
              </p>
            </li>
          </template>
          <template v-else>
            <li class="item-li positionR" :key="i" @click="handleToggle(i)">
              <p class="item colorfff item-p pd0-20">
                <span :class="'icon-l iconfont ' + item.icon"></span>
                <span>{{item.name}}</span>
                <span
                  v-show="asideFlag"
                  :class=" item.toggleFlag? 'iconfont icon-xiala icon rotate180':'iconfont icon-xiala icon'"
                ></span>
              </p>
              <ul class="item-ul" v-if="asideFlag" v-show="item.toggleFlag">
                <li
                  v-for="(w,_i) in item.children"
                  :key="i+_i"
                  @click="handleClickRouter(w,$event)"
                >
                  <p
                    :class="activeRouter ===w.path ? 'item-ul-li item-p item-li pd0-40 router-link-active ':'item-ul-li item-p colorfff item-li pd0-40'"
                  >
                    <span>{{w.name}}</span>
                  </p>
                </li>
              </ul>
            </li>
          </template>
        </template>
      </div>
    </ul>
  </aside>
</template>
<script>
import { reactive, toRefs, onBeforeMount, } from "vue";
import Data from "../../router/layout";
import { useRoute,useRouter } from "vue-router";
export default {
  props: {
    asideFlag: Boolean
  },
  setup() {
    let state = reactive({
      activeRouter: "",
      treeData: [],
      route: useRoute()
    });
    const router = useRouter();
    // 点击下拉箭头实现收缩
    function handleToggle(idx) {
      let newTreeData = [...state.treeData];
      newTreeData[idx].toggleFlag = newTreeData[idx].toggleFlag ? false : true;
      state.treeData = newTreeData;
    }
    // 点击li标签实现跳转
    function handleClickRouter(w, e) {
      state.activeRouter = w.path;
        router.push(w.path);
      e ? e.stopPropagation() : null;
    }
    onBeforeMount(() => {

      // 首次进入默认显示侧边栏url对应数据
      state.treeData = Data;
      Data.forEach((item, i) => {
        if (item.path === state.route.path) {
          state.treeData[i].toggleFlag = true;
          state.activeRouter = item.path;
        } else {
          if (item.children) {
            item.children.forEach(w => {
              if (w.path === state.route.path) {
                state.treeData[i].toggleFlag = true;
                state.activeRouter = w.path;
              }
            });
          }
        }
      });
    });

    return {
      ...toRefs(state),
      handleToggle,
      handleClickRouter
    };
  }
};
</script>
<style lang="less" scoped>
.icon-l {
  padding-right: 20px;
}
.aside {
  background: #545c64;
  overflow: hidden;
  transition: width 0.3s ease;
}
.item-p {
  height: 56px;
  line-height: 56px;
  white-space: nowrap;
  cursor: pointer;
}
.item {
  &:hover {
    background-color: #434a50;
  }
  .icon {
    position: absolute;
    right: 20px;
    transition: all 0.3s ease;
  }
  .rotate180 {
    transform: rotate(180deg);
  }
}
.item-ul {
  // position: absolute;
  // width: 100%;
  // left: 0;
  .item-ul-li {
    &:hover {
      background-color: #434a50;
    }
  }
}
.router-link-active {
  background-color: #434a50;
  color: #ffd04b;
}
</style>
