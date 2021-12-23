import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){
    return {
        name:"kim",
        age: 20,
        likes: 30,
        좋아요눌렀니: false,
        more : {}
    }
  }, 
  mutations: {
      함수(){
          axios.get().then()
      },
      setMore(state, data){
          state.more = data
      },
      좋아요(state){
        if( state.좋아요눌렀니 == false ){
            state.likes++;
            state.좋아요눌렀니 = true;
        }else{
            state.likes--;
            state.좋아요눌렀니 = false;
        }

    }
  },
  actions : {
    getData(store){
      axios.get('https://codingapple1.github.io/vue/more0.json').then((a)=>{ 
        console.log(a.data);
        store.commit('setMore', a.data)
      })
    }
  }
})

export default store