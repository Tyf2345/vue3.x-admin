<template>
  <div class="flx1">
    <Head :asideFlag="asideFlag" @on-handle-click-aside="handleClickAside"></Head>
    <div class="main-wrapper">
      <div class="mb15 tags-wrapper">
        <div
          v-for="(item,i) in tabData"
          :key="i"
          :class="item.tagClass"
          @click="handleRouter(item)"
        >
          {{item.name}}
          <span class="tag-close" @click="handleColseTag(i)">x</span>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
import Head from "./Head";
// import LayoutData from "../../router/layout";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
// import { goRepeat } from "../../utils/goRepeat";
export default {
  components: {
    Head
  },
  props: {
    asideFlag: Boolean
  },
  setup(props, { emit }) {
    let route = ref(useRoute());
    let router = useRouter();
    let tabData = ref([
      {
        path: route.value.path,
        name: route.value.name,
        tagClass: "tag cursorP mr15 tag-success"
      }
    ]);

    watch(
      () => route.value.path,
      () => {
        handleLayoutData();
      }
    );
    //导航栏数据处理
    function handleLayoutData() {
      let newArr = [],
        flag = false;
      let { path, name } = route.value;
      tabData.value.forEach(item => {
        if (path === item.path) {
          if(!flag){
          flag = true;
          newArr.push({
            path,
            name,
            tagClass: "tag cursorP mr15 tag-success"
          });
          }
        } else {
          newArr.push({
            path: item.path,
            name: item.name,
            tagClass: "tag cursorP mr15"
          });
        }
      });
      !flag
        ? newArr.push({ path, name, tagClass: "tag cursorP mr15 tag-success" })
        : null;
      tabData.value = newArr;
    }

    // 点击tag 路由跳转
    function handleRouter(item) {
      router.push(item.path);
    }
    // 关闭tag
    function handleColseTag(i) {
      let newTags = [...tabData.value];
      newTags.splice(i, 1);
      if (newTags.length === 0) {
        newTags = [
          {
            name: "首页",
            path: "/layout/home"
          }
        ];
      }

       tabData.value = newTags;
        router.push(tabData.value[tabData.value.length-1].path)
    }
    function handleClickAside() {
      emit("on-handle-click-aside");
    }
    return {
      tabData,
      route,
      handleClickAside,
      handleRouter,
      handleColseTag
    };
  }
};
</script>
<style lang="less" scoped>
.main-wrapper {
  padding: 15px 30px;
  box-sizing: border-box;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  background-color: #e9eef3;
}
.tags-wrapper {
  padding-bottom: 15px;
  border-bottom: 2px solid #b3c0d1;
}
.tag {
  display: inline-block;
  height: 32px;
  padding: 0 10px;
  line-height: 30px;
  font-size: 12px;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: nowrap;
  background-color: #f4f4f5;
  border-color: #e9e9eb;
  color: #909399;
  .tag-close {
    border-radius: 50%;
    text-align: center;
    position: relative;
    cursor: pointer;
    padding-right: 10px;
    font-size: 12px;
    height: 16px;
    width: 16px;
    line-height: 16px;
    vertical-align: middle;
    top: -3px;
    right: -5px;
  }
}
.tag-success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
  color: #67c23a;
}
</style>
