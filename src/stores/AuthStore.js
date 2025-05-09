import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    isAuthenticated: false,
    user: null,
    userList: [
      {
        email: 'hr@test.com',
        password: '123456',
        role: 'hr'
      },
      {
        email: 'user1@test.com',
        password: '123456',
        role: 'employee'
      },
      {
        email: 'user2@test.com',
        password: '123456',
        role: 'employee'
      },
      {
        email: 'user3@test.com',
        password: '123456',
        role: 'employee'
      },
      {
        email: 'project_manager@test.com',
        password: '123456',
        role: 'project_manager'
      }
    ],
    authUser: ''
  }),
  actions: {
    login(user) {
      this.isAuthenticated = true
      this.user = user
    },
    logout() {
      this.isAuthenticated = false
      this.user = null
    },
    signup(user) {
      this.isAuthenticated = true
      this.user = user
    }
  },
  persist: {
    storage: localStorage
  }
})
