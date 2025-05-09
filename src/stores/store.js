import { defineStore } from 'pinia';

export const useStore = defineStore ( 'store', {
  state: ()=> ({
    tasks: []
    
  }),
  actions: {

  },
  persist: true
})