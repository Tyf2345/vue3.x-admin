<template>
   <div>
        <h3>404</h3>
        <h3 @click="handleHOme"> <router-link to="/layout">回到首页</router-link> </h3>
   </div>
</template>
<script>

export default {
    
}
</script>
<style lang="less" scoped>
h3{
    text-align: center;
}
</style>