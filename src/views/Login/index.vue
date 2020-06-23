<template>
  <div class="login-container">
    <div class="login-wrapper">
      <div class="login">
        <div class="title">用户登录</div>
        <div class="_inp-wrap">
          <input type="text" v-model="userName" class="_inp ontline border4px" placeholder="随便输入用户名" />
        </div>
        <div class="_inp-wrap">
          <input type="text" v-model="pwd" class="_inp ontline border4px" placeholder="随便输入密码" />
        </div>
        <div class="_inp-wrap">
          <button class="base-btn ontline border4px w100" @click="handleSubmit">登录</button>
        </div>
        <div class="_inp-wrap">
          <button class="base-btn ghost ontline border4px w100" @click="handleReset">重置</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref,reactive } from "vue";
import { useStore } from 'vuex'
import { isTrimAction } from "../../utils/verification";
export default {
  setup() {
    const userName = ref("");
    const pwd = ref("");
    const state = reactive({
    store:useStore()
    })
    function handleSubmit() {
      if (isTrimAction(userName.value) && isTrimAction(pwd.value)) {
        let user = {userName:userName.value,pwd:pwd.value,time:new Date()}
        localStorage.setItem('user',JSON.stringify(user))
        state.store.commit('userFun',user)
          this.$router.push({
              path:'/layout'
          })
        return;
      } else {
          alert('请输账号密码')
      }
    }
    function handleReset() {
      userName.value = pwd.value = "";
    }
    return {
      userName,
      pwd,

      handleSubmit,
      handleReset
    };
  }
};
</script>
<style lang="less" scoped>
.login-container {
  height: 100%;
  background-color: #e7e7e7;
  .login-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    .login {
      width: 380px;
      .title {
        text-align: center;
        color: #18c7dd;
        padding-bottom: 58px;
      }
      ._inp-wrap {
        display: flex;
        margin-bottom: 22px;
        ._inp {
          display: inline-block;
          width: 100%;
          height: 40px;
          height: 40px;
          padding: 0 15px;
          border: 1px solid #dcdfe6;
          background-color: #fff;
          &:hover {
            border-color: #c0c4cc;
          }
        }
        .base-btn {
          display: inline-block;
          padding: 12px 20px;
          background: #66b1ff;
          border-color: #66b1ff;
          color: #fff;
          border: 1px solid #dcdfe6;
          transition: 0.1s;
          cursor: pointer;
          &:hover {
            opacity: 0.9;
          }
        }
        .ghost {
          background-color: #fff;
          border: 1px solid #dcdfe6;
          color: #606266;
        }
      }
    }
  }
}
</style>