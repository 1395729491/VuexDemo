import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'; 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    acc_id: 1000,
    id_card: '522222199606062833', //身份证
    nickname: '松前月下', //用户名
    phone: '18798808784' //电话号码
  },
  mutations: {
    increment(state, result) {
      // 变更状态
      state.nickname = result.data.data.nickname;
      console.log(result)
    }
  },
  actions: {
    increment({
      commit
    }) {
      axios({
        url:'http://kkwyadmin.huichifangqiu.com/index/index/getUserInfo',
        method:'POST',
        withCredentials:true,
        headers:{
          'Content-Type':'application/x-www-form-urlencoded',
        }
      }).then((result) => {
        console.log(result);
        commit('increment', result);
      }).catch((err) => {
        console.log(err);
      });
    }
  }
})