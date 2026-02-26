# 🚀 推送到GitHub完整指南

## ✅ 图片资源已处理

项目已经配置好所有图片资源，使用 Unsplash 的高质量图片作为占位符。所有图片URL都存储在 `/src/config/images.ts` 配置文件中，可以直接推送到GitHub并独立运行。

### 图片来源：
- **个人头像** - 专业职场人像
- **Post-Training项目** - AI技术抽象图
- **Qwen项目** - 蓝色数字AI科技图
- **机器人展区** - 人形机器人展览图
- **菜谱小程序** - 美食烹饪图

💡 **提示**：如果你有实际项目图片，可以直接编辑 `/src/config/images.ts` 文件，替换相应的URL即可。

---

## 📋 推送步骤

### 1️⃣ 在GitHub创建新仓库

1. 访问 https://github.com/new
2. 填写信息：
   - **Repository name**: `chen-zhu-portfolio` (或你喜欢的名字)
   - **Description**: "Personal portfolio website showcasing AI marketing expertise"
   - **Public** 或 **Private**: 根据需要选择
   - ⚠️ **不要勾选** "Add a README file"
3. 点击 **Create repository**

### 2️⃣ 初始化Git仓库

在你的项目根目录打开终端，执行：

```bash
# 初始化git
git init

# 添加所有文件
git add .

# 第一次提交
git commit -m "Initial commit: Chen Zhu portfolio website"
```

### 3️⃣ 连接远程仓库并推送

**把下面的 `YOUR_USERNAME` 替换成你的GitHub用户名：**

```bash
# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/chen-zhu-portfolio.git

# 设置主分支
git branch -M main

# 推送代码
git push -u origin main
```

### 4️⃣ 后续更新

每次修改后：

```bash
git add .
git commit -m "描述你的修改"
git push
```

## 🌐 部署到网站

### 选项1: Vercel（推荐）

1. 访问 https://vercel.com
2. 点击 "Import Project"
3. 选择你的GitHub仓库
4. 保持默认设置，点击 "Deploy"
5. 几分钟后就可以访问在线网站了！

### 选项2: Netlify

1. 访问 https://netlify.com
2. 拖拽 `dist` 文件夹（先运行 `npm run build`）
3. 或连接GitHub仓库自动部署

### 选项3: GitHub Pages

在 `package.json` 添加：

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/chen-zhu-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

安装并部署：
```bash
npm install --save-dev gh-pages
npm run deploy
```

## 🔐 如果需要身份验证

GitHub现在要求使用Personal Access Token：

1. GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token (classic)"
3. 勾选 `repo` 权限
4. 复制token（只显示一次！）
5. 推送时用token作为密码

## ✅ 完成检查清单

- [ ] 创建了GitHub仓库
- [ ] 初始化git并完成首次提交
- [ ] 成功推送到GitHub
- [ ] 替换了figma:asset图片（如需独立运行）
- [ ] （可选）部署到在线服务

## 📞 需要帮助？

如果遇到问题，检查：
1. Git是否已安装：`git --version`
2. GitHub用户名是否正确
3. 是否有仓库访问权限
4. 网络连接是否正常

---

祝推送顺利！🎉