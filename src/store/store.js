import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex); // vuexをvue全体で使用する宣言
export default new Vuex.Store({ // main.jsで読み込めるようにする
  // 以下で定義したものはどのコンポーネントでも使用出来る
  state: {
    number: 1
  },
  getters: {
    counter: state => state.number++,
    doubleCount: state => state.number * 2,
    tripleCount: state => state.number * 3
  },
  mutations:{
    increment(state){
      ++state.number;
    }
  },
  actions:{
    increment({commit},number){
      commit('increment',number);
    },
    incrementAsync({commit}){
      setTimeout(()=>{
        commit('increment')
      },1000)
    }
  },

})