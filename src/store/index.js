import { createStore } from 'vuex'

// 用户信息
const store = createStore({
    state(){
        return {
            user:{}
        }
    },
    mutations:{
        userFun({user},{userName, pwd, time}) {
            user.userName = userName
            user.pwd = pwd
            user.time = time
        }
    }
})

export default store