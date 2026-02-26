# Chen Zhu - Portfolio

个人作品集网站，展示AI营销专家Chen Zhu的专业经历、项目案例和联系方式。

## ✨ 特点

- 🎨 **高端电影感设计** - 结合苹果极简美学与流畅动画
- 🌈 **精致视觉效果** - 微妙渐变、玻璃拟态、交互光晕
- 📱 **响应式布局** - 完美适配各种设备尺寸
- ⚡ **流畅动画** - 使用 Motion (Framer Motion) 实现电影级动效
- 🎯 **专业内容** - 展示阿里云、微软等公司的核心营销项目

## 🛠️ 技术栈

- **框架**: React 18.3.1
- **动画**: Motion (Framer Motion) 12.23.24
- **样式**: Tailwind CSS 4.1.12
- **图标**: Lucide React 0.487.0
- **构建工具**: Vite 6.3.5

## 📦 安装

```bash
# 安装依赖
npm install
# 或使用 pnpm
pnpm install
```

## 🚀 运行

```bash
# 开发模式
npm run dev
# 或
pnpm dev

# 构建生产版本
npm run build
# 或
pnpm build
```

## 📂 项目结构

```
├── src/
│   ├── app/
│   │   ├── App.tsx                    # 主应用组件
│   │   └── components/                # React组件
│   │       ├── figma/                 # Figma导入的组件
│   │       └── ui/                    # UI组件库
│   └── styles/                        # 样式文件
│       ├── index.css                  # 主样式入口
│       ├── tailwind.css               # Tailwind配置
│       ├── theme.css                  # 主题变量
│       └── fonts.css                  # 字体导入
├── package.json
├── vite.config.ts
└── postcss.config.mjs
```

## 🎨 核心功能区块

- **Hero Section** - 个人介绍与背景展示
- **About** - 详细的职业理念与数据成就
- **Featured Work** - 三个核心AI营销项目案例
- **Vibe Coding Project** - 个人编程项目展示
- **Contact** - 联系方式与社交链接

## 📸 项目展示

作品集展示了以下核心项目：
1. AI Post-Training深度稿传播
2. Qwen系列案例传播
3. 云栖大会人形机器人展区策展
4. 一食一念 AI菜谱小程序

## 📝 自定义

### 修改个人信息

编辑 `/src/app/App.tsx` 文件中的 `profile` 对象：

```tsx
const profile = {
  name: "你的名字",
  title: "你的职位",
  intro: "你的介绍...",
  stats: [
    { label: "标签1", value: "数值1" },
    // ...
  ]
};
```

### 修改项目案例

在 `projects` 数组中添加或修改项目：

```tsx
const projects = [
  {
    id: 1,
    type: "focus",  // 或 "lab"
    title: "项目标题",
    desc: "项目描述",
    tags: ["标签1", "标签2"],
    image: yourImage,
    // ...
  }
];
```

## 🌐 部署

### GitHub Pages

1. 在 `package.json` 添加 homepage：
```json
{
  "homepage": "https://你的用户名.github.io/仓库名"
}
```

2. 安装 gh-pages：
```bash
npm install --save-dev gh-pages
```

3. 添加部署脚本：
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. 部署：
```bash
npm run deploy
```

### Vercel / Netlify

直接连接GitHub仓库，选择Vite构建预设即可自动部署。

## 📄 许可

© 2024 Chen Zhu. All rights reserved.

## 🤝 联系方式

- **Email**: zhuchenchloe@163.com
- **GitHub**: [@anrongyuuu](https://github.com/anrongyuuu)
- **Location**: Hangzhou, China
