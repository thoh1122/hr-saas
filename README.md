# 🏢 人事SaaS系统

## 📋 项目简介

人事SaaS系统是一个现代化的多租户人力资源管理平台，采用前后端分离架构，支持多行业定制化需求。

## 🏗️ 技术架构

### 后端技术栈
- **框架**: Spring Boot 3.2.0
- **数据库**: MySQL 8.0
- **缓存**: Redis
- **ORM**: MyBatis Plus
- **安全**: Spring Security + JWT
- **构建工具**: Maven

### 前端技术栈
- **框架**: Vue 3.3.8
- **语言**: TypeScript
- **UI库**: Element Plus
- **状态管理**: Pinia
- **路由**: Vue Router
- **构建工具**: Vite

## 📁 项目结构

```
人事系统/
├── 📄 项目蓝图与进度记录.md          # 主蓝图文档
├── 📄 开发操作记录日志.md            # 操作记录日志
├── 📄 项目结构说明.md               # 项目结构说明
├── 📄 开发指南.md                  # 开发指南
├── 📁 docs/                        # 文档目录
│   ├── 📄 系统架构图.md             # 系统架构图
│   └── 📄 api.md                   # API接口文档
├── 📁 backend/                     # 后端代码
│   ├── 📁 src/
│   │   ├── 📁 main/
│   │   │   ├── 📁 java/com/hr/saas/
│   │   │   └── 📁 resources/
│   │   └── 📁 test/
│   └── 📄 pom.xml
├── 📁 frontend/                    # 前端代码
│   ├── 📁 src/
│   │   ├── 📁 components/           # 组件
│   │   ├── 📁 views/                # 页面
│   │   ├── 📁 router/               # 路由
│   │   ├── 📁 store/                # 状态管理
│   │   ├── 📁 api/                  # API接口
│   │   ├── 📁 utils/                # 工具函数
│   │   └── 📁 assets/               # 静态资源
│   ├── 📄 package.json
│   ├── 📄 vite.config.ts
│   └── 📄 index.html
└── 📄 README.md                    # 项目说明
```

## 🚀 快速开始

### 环境要求

#### 后端环境
- JDK 17+
- Maven 3.8+
- MySQL 8.0+
- Redis 6.0+

#### 前端环境
- Node.js 18+
- npm 9+

### 安装步骤

#### 1. 克隆项目
```bash
git clone <repository-url>
cd 人事系统
```

#### 2. 后端启动
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

#### 3. 前端启动
```bash
cd frontend
npm install
npm run dev
```

### 访问地址
- **前端**: http://localhost:3000
- **后端**: http://localhost:8080
- **API文档**: http://localhost:8080/doc.html

## 📊 开发进度

### 当前阶段: 第一阶段 - 基础夯实
**开始时间**: 2024年12月  
**预计完成**: 2025年6月

### 已完成任务
- [x] 项目蓝图制定和文档建立
- [x] 开发环境搭建
- [x] 项目基础结构创建
- [x] 系统架构设计
- [x] API接口文档编写
- [x] Spring Boot项目骨架创建
- [x] Vue3项目骨架创建

### 进行中任务
- [ ] 多租户系统框架搭建

### 待开始任务
- [ ] 组织架构管理模块
- [ ] 员工管理模块
- [ ] 考勤管理模块
- [ ] 薪酬计算模块

## 📝 开发规范

### 代码规范
- **Java**: 遵循阿里巴巴Java开发手册
- **Vue**: 遵循Vue官方风格指南
- **TypeScript**: 使用严格模式
- **Git**: 使用约定式提交规范

### 提交规范
```
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式调整
refactor: 代码重构
test: 测试相关
chore: 构建过程或辅助工具的变动
```

## 🔧 开发工具推荐

### IDE
- **后端**: IntelliJ IDEA Ultimate
- **前端**: Visual Studio Code

### 数据库工具
- MySQL Workbench
- Navicat

### API测试
- Postman
- Insomnia

## 📞 联系方式

- **项目负责人**: 开发者
- **技术支持**: 开发者

## 📄 许可证

本项目采用 MIT 许可证。

---

*最后更新时间: 2024年12月19日*
*版本: v1.0*
