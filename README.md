# HR SaaS 人事管理系统

## 项目简介

这是一个基于Spring Boot + Vue3的人事SaaS管理系统，支持多租户架构，提供完整的人事管理功能。

## 技术栈

### 后端
- Spring Boot 3.2.0
- Spring Security
- Spring Data JPA
- MyBatis Plus
- MySQL 8.0+
- Redis 6.0+
- JWT认证

### 前端
- Vue 3
- TypeScript
- Element Plus
- Vite
- Pinia
- Vue Router

## 项目结构

```
hr-saas/
├── backend/          # 后端Spring Boot项目
├── frontend/         # 前端Vue3项目
├── docs/            # 项目文档
└── README.md        # 项目说明
```

## 快速开始

### 环境要求
- JDK 17+
- Maven 3.6+
- Node.js 18+
- MySQL 8.0+
- Redis 6.0+

### 后端启动
```bash
cd backend
mvn spring-boot:run
```

### 前端启动
```bash
cd frontend
npm install
npm run dev
```

## 功能模块

### 基础通用模块
- 用户管理
- 角色权限管理
- 组织架构管理
- 员工信息管理
- 考勤管理
- 薪资管理

### 行业特定模块
- 制造业人事管理
- 服务业人事管理
- 科技公司人事管理

### 高级功能模块
- 多租户管理
- 数据分析报表
- 移动端支持
- API接口管理

## 开发计划

项目采用36个月分阶段开发，详细计划请参考 `项目蓝图与进度记录.md`。

## 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

MIT License
