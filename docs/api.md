# 📡 人事SaaS系统 - API接口文档

## 📋 接口说明

本文档定义了人事SaaS系统的RESTful API接口规范。所有接口都遵循RESTful设计原则，使用JSON格式进行数据交换。

### 基础信息
- **Base URL**: `https://api.hr-saas.com/v1`
- **认证方式**: JWT Token
- **数据格式**: JSON
- **字符编码**: UTF-8

### 通用响应格式
```json
{
  "code": 200,
  "message": "success",
  "data": {},
  "timestamp": "2024-12-19T16:55:00Z"
}
```

### 错误码说明
| 错误码 | 说明 |
|--------|------|
| 200 | 成功 |
| 400 | 请求参数错误 |
| 401 | 未授权 |
| 403 | 权限不足 |
| 404 | 资源不存在 |
| 500 | 服务器内部错误 |

---

## 🔐 认证相关接口

### 1. 用户登录
**接口地址**: `POST /auth/login`  
**接口描述**: 用户登录获取访问令牌

**请求参数**:
```json
{
  "username": "admin",
  "password": "123456",
  "tenantCode": "company001"
}
```

**响应数据**:
```json
{
  "code": 200,
  "message": "登录成功",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 7200,
    "userInfo": {
      "id": 1,
      "username": "admin",
      "email": "admin@company.com",
      "role": "SUPER_ADMIN",
      "tenantId": 1,
      "tenantName": "测试公司"
    }
  }
}
```

### 2. 刷新令牌
**接口地址**: `POST /auth/refresh`  
**接口描述**: 使用刷新令牌获取新的访问令牌

**请求参数**:
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 3. 用户登出
**接口地址**: `POST /auth/logout`  
**接口描述**: 用户登出，使令牌失效

---

## 👥 员工管理接口

### 1. 获取员工列表
**接口地址**: `GET /employees`  
**接口描述**: 分页获取员工列表

**请求参数**:
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| page | int | 否 | 页码，默认1 |
| size | int | 否 | 每页数量，默认10 |
| keyword | string | 否 | 搜索关键词（姓名、工号） |
| deptId | long | 否 | 部门ID |
| status | string | 否 | 员工状态 |

**响应数据**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "total": 100,
    "pages": 10,
    "current": 1,
    "size": 10,
    "records": [
      {
        "id": 1,
        "employeeNo": "EMP001",
        "name": "张三",
        "gender": "MALE",
        "phone": "13800138000",
        "email": "zhangsan@company.com",
        "deptId": 1,
        "deptName": "技术部",
        "position": "高级工程师",
        "level": "P6",
        "hireDate": "2024-01-01",
        "status": "ACTIVE",
        "createdAt": "2024-01-01T00:00:00Z"
      }
    ]
  }
}
```

### 2. 获取员工详情
**接口地址**: `GET /employees/{id}`  
**接口描述**: 根据ID获取员工详细信息

**路径参数**:
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| id | long | 是 | 员工ID |

**响应数据**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 1,
    "employeeNo": "EMP001",
    "name": "张三",
    "gender": "MALE",
    "idCard": "110101199001011234",
    "phone": "13800138000",
    "email": "zhangsan@company.com",
    "deptId": 1,
    "deptName": "技术部",
    "position": "高级工程师",
    "level": "P6",
    "hireDate": "2024-01-01",
    "status": "ACTIVE",
    "education": [
      {
        "id": 1,
        "school": "清华大学",
        "major": "计算机科学与技术",
        "degree": "BACHELOR",
        "startDate": "2018-09-01",
        "endDate": "2022-06-30"
      }
    ],
    "workExperience": [
      {
        "id": 1,
        "company": "ABC科技有限公司",
        "position": "软件工程师",
        "startDate": "2022-07-01",
        "endDate": "2023-12-31",
        "description": "负责后端开发工作"
      }
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-12-19T16:55:00Z"
  }
}
```

### 3. 创建员工
**接口地址**: `POST /employees`  
**接口描述**: 创建新员工

**请求参数**:
```json
{
  "employeeNo": "EMP002",
  "name": "李四",
  "gender": "FEMALE",
  "idCard": "110101199002021234",
  "phone": "13800138001",
  "email": "lisi@company.com",
  "deptId": 1,
  "position": "产品经理",
  "level": "P5",
  "hireDate": "2024-12-20"
}
```

**响应数据**:
```json
{
  "code": 200,
  "message": "员工创建成功",
  "data": {
    "id": 2,
    "employeeNo": "EMP002",
    "name": "李四",
    "status": "ACTIVE",
    "createdAt": "2024-12-19T16:55:00Z"
  }
}
```

### 4. 更新员工信息
**接口地址**: `PUT /employees/{id}`  
**接口描述**: 更新员工信息

**路径参数**:
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| id | long | 是 | 员工ID |

**请求参数**:
```json
{
  "name": "李四",
  "phone": "13800138001",
  "email": "lisi@company.com",
  "deptId": 2,
  "position": "高级产品经理",
  "level": "P6"
}
```

### 5. 删除员工
**接口地址**: `DELETE /employees/{id}`  
**接口描述**: 删除员工（软删除）

**路径参数**:
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| id | long | 是 | 员工ID |

**响应数据**:
```json
{
  "code": 200,
  "message": "员工删除成功",
  "data": null
}
```

---

## 🏢 组织架构接口

### 1. 获取部门列表
**接口地址**: `GET /departments`  
**接口描述**: 获取部门树形结构

**请求参数**:
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| includeEmployees | boolean | 否 | 是否包含员工信息 |

**响应数据**:
```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "id": 1,
      "deptName": "技术部",
      "deptCode": "TECH",
      "parentId": null,
      "level": 1,
      "sortOrder": 1,
      "employeeCount": 25,
      "children": [
        {
          "id": 2,
          "deptName": "前端组",
          "deptCode": "FRONTEND",
          "parentId": 1,
          "level": 2,
          "sortOrder": 1,
          "employeeCount": 10,
          "children": []
        },
        {
          "id": 3,
          "deptName": "后端组",
          "deptCode": "BACKEND",
          "parentId": 1,
          "level": 2,
          "sortOrder": 2,
          "employeeCount": 15,
          "children": []
        }
      ]
    }
  ]
}
```

### 2. 创建部门
**接口地址**: `POST /departments`  
**接口描述**: 创建新部门

**请求参数**:
```json
{
  "deptName": "产品部",
  "deptCode": "PRODUCT",
  "parentId": null,
  "description": "负责产品设计和规划"
}
```

### 3. 更新部门
**接口地址**: `PUT /departments/{id}`  
**接口描述**: 更新部门信息

### 4. 删除部门
**接口地址**: `DELETE /departments/{id}`  
**接口描述**: 删除部门

---

## 🏢 租户管理接口

### 1. 获取租户列表
**接口地址**: `GET /tenants`  
**接口描述**: 获取租户列表（超级管理员）

**请求参数**:
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| page | int | 否 | 页码 |
| size | int | 否 | 每页数量 |
| status | string | 否 | 租户状态 |

**响应数据**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "total": 10,
    "pages": 1,
    "current": 1,
    "size": 10,
    "records": [
      {
        "id": 1,
        "tenantCode": "company001",
        "tenantName": "测试公司",
        "industryType": "TECH",
        "status": "ACTIVE",
        "employeeCount": 100,
        "createdAt": "2024-01-01T00:00:00Z",
        "expiredAt": "2025-01-01T00:00:00Z"
      }
    ]
  }
}
```

### 2. 创建租户
**接口地址**: `POST /tenants`  
**接口描述**: 创建新租户

**请求参数**:
```json
{
  "tenantCode": "company002",
  "tenantName": "新公司",
  "industryType": "MANUFACTURING",
  "adminUsername": "admin",
  "adminPassword": "123456",
  "adminEmail": "admin@newcompany.com"
}
```

### 3. 更新租户状态
**接口地址**: `PUT /tenants/{id}/status`  
**接口描述**: 更新租户状态

**请求参数**:
```json
{
  "status": "SUSPENDED",
  "reason": "欠费暂停"
}
```

---

## 📊 考勤管理接口

### 1. 获取考勤记录
**接口地址**: `GET /attendance/records`  
**接口描述**: 获取员工考勤记录

**请求参数**:
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| employeeId | long | 否 | 员工ID |
| startDate | string | 否 | 开始日期 |
| endDate | string | 否 | 结束日期 |
| page | int | 否 | 页码 |

**响应数据**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "total": 30,
    "pages": 3,
    "current": 1,
    "size": 10,
    "records": [
      {
        "id": 1,
        "employeeId": 1,
        "employeeName": "张三",
        "date": "2024-12-19",
        "checkInTime": "09:00:00",
        "checkOutTime": "18:00:00",
        "workHours": 8.0,
        "status": "NORMAL",
        "lateMinutes": 0,
        "earlyMinutes": 0
      }
    ]
  }
}
```

### 2. 员工打卡
**接口地址**: `POST /attendance/check-in`  
**接口描述**: 员工上班打卡

**请求参数**:
```json
{
  "type": "CHECK_IN",
  "location": {
    "latitude": 39.9042,
    "longitude": 116.4074,
    "address": "北京市朝阳区"
  },
  "deviceInfo": "iPhone 15 Pro"
}
```

### 3. 获取请假记录
**接口地址**: `GET /attendance/leaves`  
**接口描述**: 获取请假记录

### 4. 申请请假
**接口地址**: `POST /attendance/leaves`  
**接口描述**: 申请请假

**请求参数**:
```json
{
  "leaveType": "ANNUAL",
  "startDate": "2024-12-25",
  "endDate": "2024-12-27",
  "days": 3,
  "reason": "年假旅游",
  "attachments": ["attachment1.jpg"]
}
```

---

## 💰 薪酬管理接口

### 1. 获取工资条
**接口地址**: `GET /payroll/slips`  
**接口描述**: 获取员工工资条

**请求参数**:
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| year | int | 是 | 年份 |
| month | int | 是 | 月份 |
| employeeId | long | 否 | 员工ID（管理员可查看任意员工） |

**响应数据**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 1,
    "employeeId": 1,
    "employeeName": "张三",
    "year": 2024,
    "month": 12,
    "basicSalary": 15000.00,
    "performanceBonus": 3000.00,
    "overtimePay": 500.00,
    "allowances": 1000.00,
    "totalIncome": 19500.00,
    "socialInsurance": 1950.00,
    "housingFund": 1500.00,
    "incomeTax": 1200.00,
    "totalDeduction": 4650.00,
    "netSalary": 14850.00,
    "status": "CONFIRMED",
    "createdAt": "2024-12-19T16:55:00Z"
  }
}
```

### 2. 确认工资条
**接口地址**: `POST /payroll/slips/{id}/confirm`  
**接口描述**: 员工确认工资条

### 3. 生成工资条
**接口地址**: `POST /payroll/slips/generate`  
**接口描述**: 生成指定月份的工资条（管理员）

**请求参数**:
```json
{
  "year": 2024,
  "month": 12,
  "employeeIds": [1, 2, 3]
}
```

---

## 📈 数据统计接口

### 1. 获取员工统计
**接口地址**: `GET /statistics/employees`  
**接口描述**: 获取员工统计数据

**响应数据**:
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "totalEmployees": 100,
    "activeEmployees": 95,
    "newEmployeesThisMonth": 5,
    "departments": [
      {
        "deptName": "技术部",
        "employeeCount": 30,
        "percentage": 30.0
      },
      {
        "deptName": "产品部",
        "employeeCount": 20,
        "percentage": 20.0
      }
    ],
    "ageDistribution": [
      {
        "ageRange": "25-30",
        "count": 40,
        "percentage": 40.0
      }
    ]
  }
}
```

### 2. 获取考勤统计
**接口地址**: `GET /statistics/attendance`  
**接口描述**: 获取考勤统计数据

### 3. 获取薪酬统计
**接口地址**: `GET /statistics/payroll`  
**接口描述**: 获取薪酬统计数据

---

## 🔧 系统管理接口

### 1. 获取系统配置
**接口地址**: `GET /system/config`  
**接口描述**: 获取系统配置信息

### 2. 更新系统配置
**接口地址**: `PUT /system/config`  
**接口描述**: 更新系统配置

### 3. 获取操作日志
**接口地址**: `GET /system/logs`  
**接口描述**: 获取系统操作日志

---

## 📝 接口测试说明

### 测试工具推荐
- **Postman**: 用于API接口测试
- **Insomnia**: 轻量级API测试工具
- **curl**: 命令行测试工具

### 测试环境
- **开发环境**: `http://localhost:8080/api/v1`
- **测试环境**: `https://test-api.hr-saas.com/v1`
- **生产环境**: `https://api.hr-saas.com/v1`

### 测试数据
测试环境已预置以下测试数据：
- 超级管理员账号: `admin/123456`
- 测试租户: `company001`
- 测试员工: 10个员工数据

---

*最后更新时间: 2024年12月19日*
*版本: v1.0*
