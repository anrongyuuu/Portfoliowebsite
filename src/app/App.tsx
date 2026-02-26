import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowUpRight, 
  Mail, 
  Github,
  Globe, 
  Zap, 
  Sparkles, 
  Briefcase,
  Star,
  ArrowRight
} from 'lucide-react';
import { images } from '../config/images';

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
      { label: "Market Events", value: "40+" },
      { label: "Content Views", value: "136万+" }
    ]
  };

  const projects = [
    {
      id: 1,
      type: "focus",
      title: "AI Post-Training深度稿传播",
      desc: "深度操盘大模型后训练赛道传播,围绕阿里云AI云全栈技术能力，联合甲子光年打造技术 + 产业双视角内容体系，输出 1 篇行业深度稿，精准触达 AI 产业从业者、技术决策者，实现赛道认知度与品牌技术话语权双重提升。",
      tags: ["内容操盘", "赛道认知", "媒体联动"],
      gradient: "from-blue-400/10 via-cyan-400/10 to-blue-500/10",
      link: "https://mp.weixin.qq.com/s/M2HN_78DqJFeRbzQMolU6A",
      image: images.postTraining
    },
    {
      id: 2,
      type: "focus",
      title: "Qwen系列案例传播",
      desc: "从 0-1 操盘通义千问（Qwen）系列大模型案例传播，精选 6 个标杆客户（B 站、智联招聘、昕诺飞等），输出 6 篇合作稿件，全网曝光百万级；策划 Agent、端侧智能两大主题专场栏目，全网视频观看量超 75 万；联动 10 余家科技媒体宣发，推动 Qwen 从技术势能转化为市场动能。",
      tags: ["案例传播", "全网曝光", "品牌势能"],
      gradient: "from-purple-400/10 via-pink-400/10 to-purple-500/10",
      links: [
        "https://mp.weixin.qq.com/s/QOw-L3NQ7uKUTdF_D-tIuA",
        "https://www.36kr.com/p/3453222012556936",
        "https://mp.weixin.qq.com/s/rGlf8A1nMV8gkbjJkEBDRA"
      ],
      image: images.qwen
    },
    {
      id: 3,
      type: "focus",
      title: "云栖大会人形机器人展区策展",
      desc: "从 0-1 操盘云栖大会人形机器人展区全流程策展，以具身智能技术落地为核心主题打造沉浸式体验展区，集结 16 款前沿人形机器人。统筹展区主题定位、展项逻辑、内容结构与现场体验设计，接待数十万级行业观众及政企嘉宾，打造大会核心打卡展区，强化阿里云在具身智能赛道的前驱性。",
      tags: ["S级展会", "具身智能", "体验营销"],
      gradient: "from-emerald-400/10 via-teal-400/10 to-green-500/10",
      image: images.robotExhibit
    },
    {
      id: 4,
      type: "lab",
      title: "一食一念",
      desc: "AI 生成专属菜谱，一站式解锁个性化烹饪体验。支持快速解析美食视频、自动生成菜谱步骤，并提供智能建议功能，让烹饪更简单、更智能。",
      tags: ["AI", "Mini Program", "UX Design"],
      gradient: "from-orange-300/20 to-amber-400/20",
      image: images.recipeApp
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-200 selection:text-zinc-900">
      
      {/* 极简背景 */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/3 w-[800px] h-[800px] bg-gradient-to-br from-blue-400 via-purple-400 to-cyan-400 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-pink-400 via-orange-400 to-yellow-400 rounded-full blur-[120px]"
        />
      </div>

      {/* 极简导航 */}
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-md border-b border-zinc-900/5"
      >
        {/* 滚动进度条 */}
        <motion.div 
          style={{ scaleX: scrollYProgress }}
          className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 origin-left"
        />
        
        <div className="max-w-7xl mx-auto px-12 h-14 flex justify-end items-center gap-8">
          {[
            { name: 'About', href: '#about' },
            { name: 'Work', href: '#work' },
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
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent">
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
                    {/* 彩色光晕背景 */}
                    <motion.div 
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-cyan-400 opacity-30 blur-xl"
                    />
                    
                    <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-zinc-100 shadow-lg shadow-zinc-300/40 ring-2 ring-white/50">
                      <img 
                        src={images.profile} 
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
                <p className="text-sm text-zinc-500 leading-relaxed font-light max-w-2xl">华威商学院硕士，专注 AI 整合营销赛道。在阿里云任职期间，具备极强的业务驱动力与项目统筹能力，曾先后负责多个核心区域的 AI 云业务市场工作。擅长通过"活动+内容+传播"的整合营销闭环驱动业务增长，累计推动 6.5 亿 PPL 及百万级传播阅读量。具备丰富的活动落地经验与将复杂 AI 技术转化为市场增长动力的实战能力。</p>
                
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
        <section id="about" className="px-12 py-20 max-w-7xl mx-auto">
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
                {profile.stats.map((stat, i) => {
                  const gradients = [
                    'from-blue-600 to-cyan-600',
                    'from-purple-600 to-pink-600', 
                    'from-emerald-600 to-teal-600'
                  ];
                  const bgGradients = [
                    'from-blue-500/5 to-cyan-500/5',
                    'from-purple-500/5 to-pink-500/5',
                    'from-emerald-500/5 to-teal-500/5'
                  ];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                      className={`p-6 rounded-2xl bg-gradient-to-br ${bgGradients[i]} border border-zinc-200/50 hover:border-zinc-300/50 transition-all duration-300`}
                    >
                      <div className={`text-2xl md:text-3xl font-light mb-2 bg-gradient-to-r ${gradients[i]} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-zinc-400 tracking-widest uppercase">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Work */}
        <section id="work" className="px-12 py-20 max-w-7xl mx-auto">
          
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
                    className="md:col-span-5 relative"
                  >
                    {/* 渐变边框效果 - hover时显示 */}
                    <div className="absolute -inset-[2px] bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/40 group-hover:via-purple-500/40 group-hover:to-cyan-500/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* 图片光晕效果 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 via-purple-400/0 to-cyan-400/0 group-hover:from-blue-400/20 group-hover:via-purple-400/20 group-hover:to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl" />
                    
                    <div className="aspect-[4/3] bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-200/50 shadow-lg shadow-zinc-200/50 group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500 relative">
                      {/* 如果有图片则显示图片，否则显示渐变背景 */}
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <>
                          {/* 渐变背景 */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                          
                          {/* 项目编号水印 */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[100px] font-extralight text-zinc-900/5">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>

                  {/* 右侧信息 */}
                  <div className="md:col-span-6 space-y-6 pt-2">
                    
                    {/* 标签 */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => {
                        const tagColors = [
                          'bg-blue-500/10 text-blue-700',
                          'bg-purple-500/10 text-purple-700',
                          'bg-emerald-500/10 text-emerald-700'
                        ];
                        return (
                          <span
                            key={tag}
                            className={`px-3 py-1.5 rounded-full text-[9px] tracking-wider uppercase ${tagColors[idx % 3]}`}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>

                    {/* 标题 */}
                    <h3 className="text-xl md:text-2xl font-light text-zinc-900 leading-tight group-hover:text-zinc-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* 描述 */}
                    <p className="text-sm text-zinc-500 leading-relaxed font-light">
                      {project.desc}
                    </p>

                    {/* 链接 - 只显示有链接的项目 */}
                    {(project.link || project.links) && (
                      <div className="flex flex-wrap items-center gap-4">
                        {/* 单个链接 */}
                        {project.link && (
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-900 transition-colors group/btn"
                          >
                            <span className="tracking-wide">View Detail</span>
                            <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </a>
                        )}
                        
                        {/* 多个链接 */}
                        {project.links && project.links.map((link, idx) => (
                          <a 
                            key={idx}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-900 transition-colors group/btn"
                          >
                            <span className="tracking-wide">View Detail {project.links.length > 1 ? `${idx + 1}` : ''}</span>
                            <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Side Projects */}
        <section id="projects" className="px-12 py-16 max-w-7xl mx-auto">
          
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
              <h2 className="text-xs text-zinc-400 tracking-widest uppercase">Vibe Coding Project</h2>
            </div>
          </motion.div>

          {/* 项目网格 */}
          <div className="max-w-5xl">
            {projects.filter(p => p.type === 'lab').map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="group p-8 bg-white/40 backdrop-blur-sm rounded-2xl border border-zinc-200/50 hover:bg-white/60 hover:border-zinc-300/50 shadow-lg shadow-zinc-200/50 hover:shadow-xl group-hover:shadow-orange-300/30 transition-all duration-500"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  
                  {/* 左侧图片 - 缩小尺寸 */}
                  {project.image && (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className="md:col-span-4 relative"
                    >
                      {/* 渐变边框光晕 */}
                      <div className="absolute -inset-[2px] bg-gradient-to-br from-orange-500/0 via-amber-500/0 to-orange-500/0 group-hover:from-orange-500/30 group-hover:via-amber-500/30 group-hover:to-orange-500/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative aspect-square bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-200/50 shadow-md shadow-zinc-200/50 group-hover:shadow-lg group-hover:shadow-orange-500/20 transition-all duration-500">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </motion.div>
                  )}
                  
                  {/* 右侧项目信息 */}
                  <div className="md:col-span-8 space-y-6">
                    
                    {/* 图标 */}
                    <div className="w-10 h-10 rounded-full bg-zinc-100 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-zinc-50 flex items-center justify-center transition-all duration-300">
                      <Zap size={18} className="text-orange-400 group-hover:text-orange-500 transition-colors duration-300" />
                    </div>
                    
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
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-12 py-20 max-w-7xl mx-auto border-t border-zinc-200">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
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
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Mail size={16} className="text-blue-600" />
                </div>
                <span>zhuchenchloe@163.com</span>
                <ArrowUpRight size={14} className="text-zinc-300 group-hover:text-blue-600 transition-colors" />
              </motion.a>
              
              <motion.a
                whileHover={{ x: 4 }}
                href="https://github.com/anrongyuuu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-sm text-zinc-600 hover:text-zinc-900 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Github size={16} className="text-purple-600" />
                </div>
                <span>github.com/anrongyuuu</span>
                <ArrowUpRight size={14} className="text-zinc-300 group-hover:text-purple-600 transition-colors" />
              </motion.a>
              
              <div className="flex items-center gap-4 text-sm text-zinc-400">
                <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                  <Globe size={16} className="text-zinc-400" />
                </div>
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