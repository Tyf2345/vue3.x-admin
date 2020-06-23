# vue3.x-admin 

### 前言
  这是一个完全使用 vue3.x 语法开发的后台管理系统，页面主要包括 CSS3特效， 前端解析xlsx，前端文件下载，可拖拽的div，图表，益智小游戏，vuex4.x 存储用户信息等功能，该项目基本覆盖了vue3.x全家桶的方方面面。 功能丰富，注释多多， 近期会更新D3.js图表，并会进行一些代码优化，欢迎大家提意见。
  使用vue3.x开发项目 `真香！！！`

### demo: [传送阵](http://114.215.147.221:8086/login)
### 技术栈
  ```js
    Vue3.x + vue-router4.x + vuex4.x + Less + Echarts
  ```

  ### 项目运行
  ```js
  git clone https://github.com/Tyf2345/vue3.x-admin.git
  cd vue-admin-ele
  yarn install
  yarn serve
  ```

  ### vue2.x版本传送地址 (https://github.com/Tyf2345/vue-admin-ele)


### 说明

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  如有问题请直接在 Issues 中提

### 目标功能
- [x] 登录/登出 -- 完成
- [x] 首页 -- 完成
- [x] icon -- 完成
- [x] table -- 完成
- [x] 柱图 -- 完成
- [x] 折线图 -- 完成
- [x] 拖拽div -- 完成
- [x] 前端解析xlsx -- 完成
- [x] 个贪吃蛇小游戏 -- 完成
- [x] 人中心 -- 完成

### 结构目录

├── build                                     // webpack配置文件 <br/>
├── config                                      // 项目打包路径 <br/>
├── src                                         // 源码目录 <br/>
│   ├── assets                                  // 公共资源， 公共css <br/>
│   ├── components                              // 公共组件 <br/>
│   ├── docs                                    // 前端上传 解析xlsx文件 <br/>
│   ├── mock                                    // 异步模拟ajax调用接口 <br/>
│   ├── router                                  // 路由相关 <br/>
│   ├── vuex                                    // 状态管理相关 <br/>
│   ├── utils                                   // 工具类，方法 <br/>
│   ├── views                                   // 页面相关 <br/>
│   ├── App.vue                                 // 页面入口文件 <br/>
│   ├── main.js                                 // 程序入口文件，加载各种公共组件 <br/>
├── index.html                                  // 入口html文件 <br/>

