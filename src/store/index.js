import { createStore } from 'vuex'
import axios from 'axios';
import {toast} from 'vue3-toastify'
import "vue3-toastify/dist/index.css"
import {useCookies} from 'vue-cookies'
import router from '@/router';

axios.defaults.withCredentials = true
axios.defaults.headers = $cookies.get('token')


export default createStore({
  state: {
    users: null,
    fruits: null
  },
  getters: {
  },
  mutations: {
    // setUsers(state, payload){
    //   state.users = payload;
    // },
    // setLogin(state, payload){
    //   state.users = payload;
    // }
    setFruits(state,payload){
      state.fruits = payload;
    }
  },
  actions: {
    async fetchUsers({commit}){
      let data = await fetch ('http://localhost:7000/users/getAllUsers');
      let users = await data.json()
      commit('setUsers', users)
    },
    async addUser({commit},info){
      let {data} = await axios.post('http://localhost:7000/users/addUser',info);
      console.log(data);
    }, 
    async loginUser({commit},info){
      let {data} = await axios.post(`http://localhost:7000/users/login`,info)
      console.log(data);
      $cookies.set('token',data.token)
      if(data.message){
        toast('You have logged in successfully', {
          "theme": "auto",
          "type": "success",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }
      // await router.push('/')
      // location.reload()
    },
    async getFruits({commit}){
      let {data} = await axios.get('http://localhost:7000/fruits/getAllFruit')
      console.log(data);
      commit('setFruits',data)
    },
    async addToCart({commit},fruit_ID){
      let {data} = await axios.get('http://localhost:7000/fruits/cart',{id:fruit_ID})
      console.log(data);
      
    }
  },
  modules: {
  }
})