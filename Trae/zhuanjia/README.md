# 外部专家数字人平台

这是一个连接专家与用户的数字平台，提供专家展示、搜索、详情查看以及管理后台等功能。

## 技术栈

- 前端框架：React 18.3.1
- 语言：TypeScript
- 构建工具：Vite 6.3.5
- 路由：React Router DOM 7.9.6
- 状态管理：Zustand 5.0.3
- 样式：Tailwind CSS
- 部署平台：Vercel

## 本地运行

### 环境要求

- Node.js (推荐 v18 或更高版本)
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

项目将在 http://localhost:5173 启动

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 部署

项目已配置自动部署到Vercel。每次推送到main分支时，都会自动触发部署流程。

## 项目结构

```
zhuanjia/
├── public/              # 静态资源
├── src/
│   ├── components/      # 组件
│   │   ├── chat/       # 聊天相关组件
│   │   ├── common/     # 通用组件
│   │   └── expert/     # 专家相关组件
│   ├── hooks/          # 自定义钩子
│   ├── layouts/        # 布局组件
│   ├── pages/          # 页面组件
│   │   ├── admin/      # 管理后台页面
│   │   ├── expert/     # 专家相关页面
│   │   ├── home/       # 首页相关页面
│   │   └── organization/ # 机构相关页面
│   ├── stores/         # 状态管理
│   ├── types/          # TypeScript类型定义
│   └── utils/          # 工具函数
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```