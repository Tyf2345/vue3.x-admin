<template>
  <div class="head-wrapper">
    <div class="head-l">
      <i
        :class="asideFlag?'iconfont collapse-left icon-collapse-left cursorP':'iconfont collapse-right icon-collapseright cursorP'"
        @click="handleClickAside"
      ></i>
      <span class="text">后台管理系统</span>
    </div>

    <div class="head-r">
      <span>{{user.userName}}</span>
       <span class="cursorP" @click="handleLogin">登出</span>
      <img
        class="img"
        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3439301883,4183231930&fm=26&gp=0.jpg"
        alt
      />
     
    </div>
  </div>
</template>
<script>
import { reactive,toRefs } from 'vue'
export default {
  props: {
    asideFlag: Boolean
  },
  setup(props, ctx) {
    let state = reactive({
      user:JSON.parse(localStorage.getItem('user'))
    })
    function handleClickAside() {
      ctx.emit("on-handle-click-aside");
    }
    //登出
    function handleLogin() {
      localStorage.clear()
      this.$router.push('/login')
    }
    return {
      ...toRefs(state),
      handleClickAside,
      handleLogin
    };
  }
};
</script>
<style lang="less" scoped>
.head-wrapper {
  display: flex;
  width: 100%;
  align-items: center;
  height: 60px;
  padding: 0 15px;
  background: #b3c0d1;
  font-size: 20px;
  color: #333;
  .head-l {
    .text {
      padding-left: 12px;
    }
  }
  .head-r {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    span{
      padding-left: 20px ;
    }
    img {
      margin-left: 12px;
      //   padding-left: 11px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      animation: myroutate 5s linear infinite;
    }
  }
}
@keyframes myroutate {
  to {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}
</style>