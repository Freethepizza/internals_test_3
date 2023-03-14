import { defineStore } from "pinia";

export const useMainStore = defineStore('mainStore', {
    state:()=>{
        return{
            test:'this is global state',
            session:null,
            loaded: '...'
        }
    },
    actions:{
        doStuff(){
            //console.log('doing stuff');
            this.$state.test = 'this is global state from server side';
        },

        doLoading(){
            this.$state.loaded = 'loading...'
        },

        doLoaded(){
            this.$state.loaded = 'loaded!!!'
        }
    }
  })