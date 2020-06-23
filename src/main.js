import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
//公共css
import "./assets/base/index.css";
// iconfont
import './assets/iconFont/iconfont.css'
const app = createApp(App)
app.use(router)
app.use(store)
app.mount("#app");
