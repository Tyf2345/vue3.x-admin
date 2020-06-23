<template>
  <div class="flx">
    <Aside :asideFlag="asideFlag"></Aside>
    <Main :asideFlag="asideFlag" @on-handle-click-aside='handleClickAside'></Main>
  </div>
</template>
<script>
import Aside from "../../components/layout/Aside";
import Main from "../../components/layout/Main";
import { ref } from 'vue'

export default {
  components: {
    Aside,
    Main
  },
  setup() {
      let asideFlag = ref(true)
      function handleClickAside() {
          asideFlag.value = !asideFlag.value
      }
      return{
          asideFlag,
          handleClickAside
      }
  }
};
</script>