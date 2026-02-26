# Chen Zhu Portfolio - 完整代码文档

## 项目概述

这是一个高端、电影级的个人作品集网站，采用 Apple 式极简美学，使用 React + Framer Motion 实现流畅动画效果。

## 技术栈

- **React** - 前端框架
- **Framer Motion** (motion/react) - 动画库
- **Tailwind CSS v4** - 样式框架
- **Lucide React** - 图标库

## 设计特点

- 🎨 浅色调配色方案
- ✨ 玻璃态效果 (Glass-morphism)
- 🎬 流畅的滚动动画
- 📱 响应式设计
- 🖋️ 优雅的排版系统

## 完整代码

### `/src/app/App.tsx`

```tsx
import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  Globe, 
  Zap, 
  Sparkles, 
  Briefcase,
  Star,
  ArrowRight
} from 'lucide-react';
import profileImage from 'figma:asset/893fc581323cbba8c5fef0fda2831b714099bdd2.png';

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  const profile = {
    name: "Chen Zhu",
    title: "AI Marketing Specialist",
    intro: "我相信叙事的力量——它不仅是描述，更是连接技术与商业的桥梁。基于对 AI 赛道的深耕、敏锐的市场洞察以及对内容的极致追求，我致力于将复杂的 AI 演进转化为触达人心的品牌共鸣，创造持久的增长价值。",
    stats: [
      { label: "PPL Driven", value: "6.5亿+" },
      { label: "Market Events", value: "13+" },
      { label: "Media Features", value: "27+" }
    ]
  };

  const projects = [
    {
      id: 1,
      type: "focus",
      title: "云栖大会：具身智能与机器人展区",
      desc: "从0-1策划50+ AI展项，定义具身智能叙事逻辑。成功展示16款人形机器人集群，接待数十万观众及核心媒体。",
      tags: ["具身智能", "全案策划", "S级会展"],
      gradient: "from-blue-400/10 via-cyan-400/10 to-blue-500/10"
    },
    {
      id: 2,
      type: "focus",
      title: "AI云业务：区域整合营销方案",
      desc: "负责江浙皖、华北等核心区域。设计活动+内容+传播整合方案，累计推动PPL达6.5亿，驱动业务高增长。",
      tags: ["增长驱动", "数据分析", "存量激活"],
      gradient: "from-purple-400/10 via-pink-400/10 to-purple-500/10"
    },
    {
      id: 3,
      type: "focus",
      title: "AI技术简报与标准化物料体系",
      desc: "将复杂的大模型推理、后训练等技术转化为可落地的营销语言，显著降低销售沟通与客户理解成本。",
      tags: ["内容策略", "技术降维", "B2B叙事"],
      gradient: "from-emerald-400/10 via-teal-400/10 to-green-500/10"
    },
    {
      id: 4,
      type: "lab",
      title: "AI Agent 营销助手",
      desc: "利用 Prompt 工程构建的自动化营销文案辅助工具。",
      tags: ["LLM", "Efficiency"],
      gradient: "from-orange-300/20 to-amber-400/20"
    },
    {
      id: 5,
      type: "lab",
      title: "可视化交互简历",
      desc: "探索 Web 动效与叙事性履历结合的灵动实验。",
      tags: ["Creative Dev", "UI/UX"],
      gradient: "from-cyan-300/20 to-blue-400/20"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-200 selection:text-zinc-900">
      
      {/* 极简背景 */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 right-1/3 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[120px]" />
      </div>

      {/* 极简导航 */}
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-md border-b border-zinc-900/5"
      >
        <div className="max-w-7xl mx-auto px-12 h-14 flex justify-end items-center gap-8">
          {[
            { name: 'Work', href: '#work' },
            { name: 'About', href: '#about' },
            { name: 'Contact', href: '#contact' }
          ].map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
              className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors tracking-wide"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      <main className="relative">
        
        {/* Hero - 极简高级 */}
        <section className="min-h-screen flex items-center justify-center px-12 pt-32">
          <motion.div
            style={{ opacity: heroOpacity, y: heroY }}
            className="max-w-6xl w-full"
          >
            <div className="space-y-16">
              
              {/* 名字与照片 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-6"
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-zinc-900 leading-none">
                  {profile.name}
                </h1>
                
                {/* 小圆形照片 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-shrink-0"
                >
                  <div className="relative">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-zinc-100 shadow-lg shadow-zinc-300/40">
                      <img 
                        src={profileImage} 
                        alt="Chen Zhu"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    {/* 装饰边框 */}
                    <div className="absolute inset-0 rounded-full border border-zinc-200/60 pointer-events-none" />
                  </div>
                </motion.div>
              </motion.div>

              {/* 职位 - 轻描淡写 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                <p className="text-base text-zinc-500 tracking-wide">
                  {profile.title}
                </p>
                
                <div className="w-12 h-px bg-zinc-300" />
                
                {/* 工作经验描述 */}
                <p className="text-sm text-zinc-500 leading-relaxed font-light max-w-2xl">
                  华威商学院硕士，专注 AI 整合营销赛道（ToB 方向）。在阿里云任职期间，具备极强的业务驱动力与项目统筹能力，曾先后负责多个核心区域的 AI 云业务市场工作。擅长通过"活动+内容+传播"的整合营销闭环驱动业务增长，累计推动 6.5 亿 PPL 及百万级传播阅读量。具备丰富的活动落地经验与将复杂 AI 技术转化为市场增长动力的实战能力。
                </p>
                
                {/* 公司与学校信息 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-12 text-xs text-zinc-400 tracking-wider">
                    <span>Alibaba Cloud · 2023—2025</span>
                    <span>Microsoft · 2022</span>
                  </div>
                  
                  <div className="flex items-center gap-12 text-xs text-zinc-400 tracking-wider">
                    <span>Warwick Business School · 2021—2022</span>
                    <span>Southeast University · 2016—2020</span>
                  </div>
                </div>
              </motion.div>

              {/* Scroll 提示 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="pt-24"
              >
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[10px] text-zinc-400 tracking-widest uppercase flex items-center gap-3"
                >
                  <span>Scroll</span>
                  <div className="w-8 h-px bg-zinc-300" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* About 介绍 */}
        <section id="about" className="px-12 py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
            
            {/* 左侧标题 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="md:col-span-3"
            >
              <h2 className="text-xs text-zinc-400 tracking-widest uppercase sticky top-24">
                README
              </h2>
            </motion.div>

            {/* 右侧内容 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-9 space-y-12"
            >
              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-light">
                {profile.intro}
              </p>

              {/* 数据 - 内联展示 */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-zinc-200">
                {profile.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                  >
                    <div className="text-2xl md:text-3xl font-light text-zinc-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-zinc-400 tracking-widest uppercase">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Work */}
        <section id="work" className="px-12 py-32 max-w-7xl mx-auto">
          
          {/* 标题 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="flex items-center gap-4 mb-3">
              <Briefcase size={14} className="text-zinc-400" />
              <h2 className="text-xs text-zinc-400 tracking-widest uppercase">Featured Work</h2>
            </div>
          </motion.div>

          {/* 项目列表 */}
          <div className="space-y-32">
            {projects.filter(p => p.type === 'focus').map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                  
                  {/* 左侧序号 */}
                  <div className="md:col-span-1 text-xs text-zinc-300 tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* 中间视觉 */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="md:col-span-5"
                  >
                    <div className="aspect-[4/3] bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-200/50 shadow-lg shadow-zinc-200/50 group-hover:shadow-xl group-hover:shadow-zinc-300/50 transition-all duration-500 relative">
                      {/* 渐变背景 */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                      
                      {/* 项目编号水印 */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[100px] font-extralight text-zinc-900/5">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* 右侧信息 */}
                  <div className="md:col-span-6 space-y-6 pt-2">
                    
                    {/* 标签 */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] text-zinc-400 tracking-wider uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* 标题 */}
                    <h3 className="text-xl md:text-2xl font-light text-zinc-900 leading-tight group-hover:text-zinc-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* 描述 */}
                    <p className="text-sm text-zinc-500 leading-relaxed font-light">
                      {project.desc}
                    </p>

                    {/* 链接 */}
                    <button className="flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-900 transition-colors group/btn">
                      <span className="tracking-wide">View Project</span>
                      <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Side Projects */}
        <section id="projects" className="px-12 py-32 max-w-7xl mx-auto">
          
          {/* 标题 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="flex items-center gap-4 mb-3">
              <Sparkles size={14} className="text-zinc-400" />
              <h2 className="text-xs text-zinc-400 tracking-widest uppercase">Side Projects</h2>
            </div>
          </motion.div>

          {/* 项目网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter(p => p.type === 'lab').map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="group p-8 bg-white/40 backdrop-blur-sm rounded-2xl border border-zinc-200/50 hover:bg-white/60 hover:border-zinc-300/50 transition-all duration-300"
              >
                <div className="space-y-6">
                  
                  {/* 图标 */}
                  <Zap size={18} className="text-zinc-300 group-hover:text-zinc-400 transition-colors" />
                  
                  {/* 标题 */}
                  <h4 className="text-base font-light text-zinc-900">
                    {project.title}
                  </h4>
                  
                  {/* 描述 */}
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {project.desc}
                  </p>
                  
                  {/* 标签 */}
                  <div className="flex gap-3 pt-2">
                    {project.tags.map(t => (
                      <span key={t} className="text-[9px] text-zinc-400 tracking-wider uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-12 py-32 max-w-7xl mx-auto border-t border-zinc-200">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* 状态标签 */}
            <div className="inline-flex items-center gap-2 mb-16">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              <span className="text-[10px] text-zinc-400 tracking-widest uppercase">
                Available for Projects
              </span>
            </div>

            {/* 标题 */}
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900 mb-16 leading-relaxed">
              Let's create narratives <br />that shape experience.
            </h2>

            {/* 联系方式 */}
            <div className="space-y-6">
              <motion.a
                whileHover={{ x: 4 }}
                href="mailto:zhuchenchloe@163.com"
                className="flex items-center gap-4 text-sm text-zinc-600 hover:text-zinc-900 transition-colors group"
              >
                <Mail size={16} className="text-zinc-400" />
                <span>zhuchenchloe@163.com</span>
                <ArrowUpRight size={14} className="text-zinc-300 group-hover:text-zinc-600 transition-colors" />
              </motion.a>
              
              <div className="flex items-center gap-4 text-sm text-zinc-400">
                <Phone size={16} className="text-zinc-400" />
                <span>132 6082 8791</span>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-zinc-400">
                <Globe size={16} className="text-zinc-400" />
                <span>Hangzhou, China</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="px-12 py-16 max-w-7xl mx-auto border-t border-zinc-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] text-zinc-400 tracking-wider">
            <p>© 2024 Chen Zhu. All rights reserved.</p>
            <p>Designed & Developed with intention</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;
```

## 页面结构

### 1. Hero Section (第一屏)
- 大标题名字 + 圆形照片
- 职位与简介
- 工作经历与教育背景
- 滚动提示动画

### 2. About Section (README)
- 个人理念陈述
- 关键数据展示：PPL、活动数、媒体曝光

### 3. Featured Work Section
- 3个核心项目案例
- 包含序号、视觉卡片、标签、描述
- 悬停交互效果

### 4. Side Projects Section
- 2个实验性项目
- 网格布局，卡片式展示

### 5. Contact Section
- 可用状态指示
- 联系方式（邮箱、电话、地址）

### 6. Footer
- 版权信息

## 动画效果

### 滚动动画
- Hero 区域随滚动淡出上移
- 各部分进入视口时触发动画

### 交互动画
- 导航链接悬停效果
- 项目卡片缩放效果
- 按钮箭头位移效果

### 入场动画
- 渐显 + Y轴位移
- 错开延迟时间
- 自定义贝塞尔曲线缓动

## 样式系统

### 配色
- 主色：`zinc-900` (深灰黑)
- 次要文字：`zinc-500`, `zinc-400`
- 背景：`zinc-50` (极浅灰)
- 强调色：蓝色、紫色渐变

### 字体
- 超大标题：`text-6xl ~ text-8xl`
- 小标题：`text-xs`，全大写，字母间距加宽
- 正文：`text-sm ~ text-base`，font-light

### 间距
- Section 间距：`py-32` (8rem)
- 内容间距：`space-y-16`, `space-y-8`
- 网格间距：`gap-12`, `gap-24`

## 关键特性

✅ **响应式设计** - 移动端到桌面端完美适配
✅ **性能优化** - 使用 viewport once 避免重复动画
✅ **无障碍** - 语义化 HTML 结构
✅ **视觉层次** - 清晰的信息架构
✅ **交互反馈** - 丰富的悬停和滚动效果

## 使用说明

1. 确保已安装 `motion` 和 `lucide-react` 包
2. 照片资源路径：`figma:asset/893fc581323cbba8c5fef0fda2831b714099bdd2.png`
3. 根据需要修改 `profile` 和 `projects` 数据
4. 调整颜色变量以匹配品牌色

## 自定义建议

- **更换配色**：修改 Tailwind 类名中的颜色值
- **调整动画速度**：修改 `duration` 和 `delay` 参数
- **添加项目**：在 `projects` 数组中添加新对象
- **修改内容**：编辑 `profile` 对象中的文本

---

**设计理念**：Less is More - 用最少的元素传达最多的信息

**核心价值**：专业、精致、克制、有品味
