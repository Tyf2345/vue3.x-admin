<template>
  <div>
    <div>VUEX  用户信息</div>
    <div class="con">
      <div class="item">
        <span class="text">用户名:</span>
        <span class="info">{{user.userName}}</span>
      </div>
      <div class="item">
        <span class="text">用户名:</span>
        <span class="info">{{user.pwd}}</span>
      </div>
      <div class="item">
        <span class="text">登陆日期:</span>
        <span class="info">{{user.time}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import dayjs from "dayjs";
export default {
  setup() {
    let store = useStore();
    // 或者传入一个拥有 get 和 set 函数的对象，创建一个可手动修改的计算状态
    let user = computed({
      get: () => {
        return {
          userName: store.state.user.userName,
          pwd: store.state.user.pwd,
          time: dayjs(store.state.user.time).format("YYYY-MM-DD hh:mm:ss")
          // .locale("zh-cn")
        };
      }
    });
    return {
      user
    };
  }
};
</script>
<style lang="less" scoped>
.con {
  margin-left: 4.16%;
  .item {
    margin-top: 12px;
    border-radius: 6px;
    display: flex;
    width: 33.33%;
    background: #fff;
    padding-left: 20px;
    line-height: 3.5;
    .text {
      width: 25%;
    }
    .info {
      flex: 1;
    }
  }
}
</style>