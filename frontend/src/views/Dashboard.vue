<template>
  <div class="dashboard">
    <div class="dashboard-header">
      <h1>仪表盘</h1>
      <div class="user-info">
        <span>欢迎，{{ userStore.user?.realName }}</span>
        <el-button type="text" @click="handleLogout">退出登录</el-button>
      </div>
    </div>
    
    <div class="dashboard-content">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card class="stat-card">
            <div class="stat-content">
              <div class="stat-icon tenant">
                <el-icon><OfficeBuilding /></el-icon>
              </div>
              <div class="stat-info">
                <div class="stat-number">{{ stats.tenantCount }}</div>
                <div class="stat-label">租户总数</div>
              </div>
            </div>
          </el-card>
        </el-col>
        
        <el-col :span="6">
          <el-card class="stat-card">
            <div class="stat-content">
              <div class="stat-icon user">
                <el-icon><User /></el-icon>
              </div>
              <div class="stat-info">
                <div class="stat-number">{{ stats.userCount }}</div>
                <div class="stat-label">用户总数</div>
              </div>
            </div>
          </el-card>
        </el-col>
        
        <el-col :span="6">
          <el-card class="stat-card">
            <div class="stat-content">
              <div class="stat-icon active">
                <el-icon><CircleCheck /></el-icon>
              </div>
              <div class="stat-info">
                <div class="stat-number">{{ stats.activeTenantCount }}</div>
                <div class="stat-label">活跃租户</div>
              </div>
            </div>
          </el-card>
        </el-col>
        
        <el-col :span="6">
          <el-card class="stat-card">
            <div class="stat-content">
              <div class="stat-icon online">
                <el-icon><Monitor /></el-icon>
              </div>
              <div class="stat-info">
                <div class="stat-number">{{ stats.onlineUserCount }}</div>
                <div class="stat-label">在线用户</div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      
      <el-row :gutter="20" style="margin-top: 20px;">
        <el-col :span="12">
          <el-card>
            <template #header>
              <div class="card-header">
                <span>快速操作</span>
              </div>
            </template>
            <div class="quick-actions">
              <el-button type="primary" @click="goToTenant">租户管理</el-button>
              <el-button type="success" @click="goToUser">用户管理</el-button>
              <el-button type="info" @click="goToRole">角色管理</el-button>
              <el-button type="warning" @click="goToPermission">权限管理</el-button>
            </div>
          </el-card>
        </el-col>
        
        <el-col :span="12">
          <el-card>
            <template #header>
              <div class="card-header">
                <span>系统信息</span>
              </div>
            </template>
            <div class="system-info">
              <div class="info-item">
                <span class="label">当前租户：</span>
                <span class="value">{{ userStore.user?.tenantName }}</span>
              </div>
              <div class="info-item">
                <span class="label">系统版本：</span>
                <span class="value">v1.0.0</span>
              </div>
              <div class="info-item">
                <span class="label">最后登录：</span>
                <span class="value">{{ formatTime(new Date()) }}</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { OfficeBuilding, User, CircleCheck, Monitor } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/user'

const router = useRouter()
const userStore = useUserStore()

const stats = ref({
  tenantCount: 15,
  userCount: 128,
  activeTenantCount: 12,
  onlineUserCount: 45
})

const goToTenant = () => {
  router.push('/tenant')
}

const goToUser = () => {
  router.push('/user')
}

const goToRole = () => {
  ElMessage.info('角色管理功能开发中...')
}

const goToPermission = () => {
  ElMessage.info('权限管理功能开发中...')
}

const handleLogout = async () => {
  try {
    await ElMessageBox.confirm('确定要退出登录吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
    
    userStore.clearUser()
    ElMessage.success('退出成功')
    router.push('/login')
  } catch {
    // 用户取消
  }
}

const formatTime = (date: Date) => {
  return date.toLocaleString('zh-CN')
}

onMounted(() => {
  // 加载统计数据
})
</script>

<style scoped>
.dashboard {
  padding: 20px;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.dashboard-header h1 {
  margin: 0;
  color: #333;
  font-size: 24px;
  font-weight: 600;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-info span {
  color: #666;
  font-size: 14px;
}

.stat-card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.stat-content {
  display: flex;
  align-items: center;
  gap: 15px;
}

.stat-icon {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
}

.stat-icon.tenant {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.stat-icon.user {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.stat-icon.active {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.stat-icon.online {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.stat-info {
  flex: 1;
}

.stat-number {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  line-height: 1;
}

.stat-label {
  font-size: 14px;
  color: #666;
  margin-top: 4px;
}

.card-header {
  font-weight: 600;
  color: #333;
}

.quick-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.system-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-item .label {
  color: #666;
  font-size: 14px;
}

.info-item .value {
  color: #333;
  font-size: 14px;
  font-weight: 500;
}
</style>
