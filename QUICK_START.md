# 🎯 快速开始

## ✅ 已完成的准备工作

我已经为你准备好了所有必要的文件，项目可以直接推送到GitHub并独立运行！

### 新增/修改的文件：

1. **`.gitignore`** - Git忽略规则
2. **`README.md`** - 项目完整说明文档  
3. **`index.html`** - HTML入口文件
4. **`src/main.tsx`** - React应用入口
5. **`src/config/images.ts`** - 图片资源配置（使用Unsplash图片）
6. **`src/app/App.tsx`** - 更新导入方式，使用配置化图片
7. **`package.json`** - 更新项目名称和脚本
8. **`GITHUB_PUSH_GUIDE.md`** - 详细推送指南

---

## 🚀 三步推送到GitHub

### 第一步：在GitHub创建仓库

1. 访问：https://github.com/new
2. 仓库名：`chen-zhu-portfolio`
3. 选择 Public 或 Private
4. ⚠️ 不要勾选任何初始化选项
5. 点击 **Create repository**

### 第二步：在本地初始化并提交

```bash
git init
git add .
git commit -m "Initial commit: Chen Zhu portfolio with cinematic design"
```

### 第三步：连接并推送

**记得替换 `YOUR_USERNAME` 为你的GitHub用户名：**

```bash
git remote add origin https://github.com/YOUR_USERNAME/chen-zhu-portfolio.git
git branch -M main
git push -u origin main
```

✅ **完成！** 代码已成功推送到GitHub！

---

## 🌐 部署上线（可选）

### 推荐：Vercel（最简单）

1. 访问 https://vercel.com 并登录
2. 点击 "Import Project"  
3. 选择你的 GitHub 仓库 `chen-zhu-portfolio`
4. 点击 "Deploy"
5. 等待1-2分钟，获得在线访问链接 🎉

---

## 📝 自定义内容

### 替换图片

编辑 `/src/config/images.ts`，替换图片URL：

```typescript
export const images = {
  profile: "你的头像URL",
  postTraining: "项目1图片URL",
  qwen: "项目2图片URL",
  robotExhibit: "项目3图片URL",
  recipeApp: "项目4图片URL"
};
```

### 修改个人信息

编辑 `/src/app/App.tsx`，找到 `profile` 对象修改：

```typescript
const profile = {
  name: "你的名字",
  title: "你的职位",
  intro: "你的介绍...",
  stats: [/* 修改数据 */]
};
```

### 修改项目案例

在 `projects` 数组中添加或修改项目。

---

## 💻 本地开发

```bash
# 安装依赖（如果还没有）
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

---

## 🎨 技术栈

- **React 18.3** - 前端框架
- **Motion (Framer Motion) 12.23** - 动画库
- **Tailwind CSS 4.1** - 样式框架
- **Vite 6.3** - 构建工具
- **Lucide React** - 图标库

---

## 📞 遇到问题？

查看详细指南：
- 📄 **README.md** - 完整项目文档
- 📘 **GITHUB_PUSH_GUIDE.md** - 详细推送教程

---

**祝你顺利！** 🎉
