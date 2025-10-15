import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref<any>(null)
  const token = ref<string>('')
  const tenantId = ref<number | null>(null)
  
  // 设置用户信息
  const setUser = (userInfo: any) => {
    user.value = userInfo
  }
  
  // 设置Token
  const setToken = (tokenValue: string) => {
    token.value = tokenValue
    localStorage.setItem('token', tokenValue)
  }
  
  // 设置租户ID
  const setTenantId = (id: number) => {
    tenantId.value = id
    localStorage.setItem('tenantId', id.toString())
  }
  
  // 清除用户信息
  const clearUser = () => {
    user.value = null
    token.value = ''
    tenantId.value = null
    localStorage.removeItem('token')
    localStorage.removeItem('tenantId')
  }
  
  // 初始化用户信息
  const initUser = () => {
    const savedToken = localStorage.getItem('token')
    const savedTenantId = localStorage.getItem('tenantId')
    
    if (savedToken) {
      token.value = savedToken
    }
    
    if (savedTenantId) {
      tenantId.value = parseInt(savedTenantId)
    }
  }
  
  return {
    user,
    token,
    tenantId,
    setUser,
    setToken,
    setTenantId,
    clearUser,
    initUser
  }
})
