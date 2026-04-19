import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const aiTechnologies = [
  {
    name: 'RAG',
    fullName: '检索增强生成 (Retrieval Augmented Generation)',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    description: '通过向量数据库检索相关信息，结合 LLM 生成答案，解决幻觉问题和知识时效性问题',
    useCases: ['知识库问答', '企业文档搜索', '实时数据分析'],
    color: 'from-blue-500 to-cyan-500',
    details: ['向量嵌入', '相似度检索', '上下文增强']
  },
  {
    name: 'LangChain',
    fullName: 'AI 应用开发框架',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    description: '模块化框架，简化 LLM 应用开发，提供 Chains、Agents、Memory 等强大组件',
    useCases: ['对话系统', '自动化工作流', '智能助手'],
    color: 'from-purple-500 to-pink-500',
    details: ['Prompt 模板', '工具调用', '记忆管理']
  },
  {
    name: 'Vector DB',
    fullName: '向量数据库 (Vector Database)',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 7h.01M7 12h.01M7 17h.01M12 7h5M12 12h5M12 17h5" />
      </svg>
    ),
    description: '高效存储和检索高维向量，实现语义搜索、相似度匹配等 AI 核心能力',
    useCases: ['语义搜索', '推荐系统', '图像检索'],
    color: 'from-emerald-500 to-teal-500',
    details: ['余弦相似度', 'HNSW 索引', 'ANN 搜索']
  }
];

const techStack = [
  { name: 'MiniMax-M2.7', category: 'LLM' },
  { name: 'GLM-5.1', category: 'LLM' },
  { name: 'ChromaDB', category: 'Vector DB' },
  { name: 'FAISS', category: 'Vector DB' },
  { name: 'LangChain', category: 'Framework' },
  { name: 'LlamaIndex', category: 'Framework' },
  { name: 'Hugging Face', category: 'Model Hub' },
  { name: 'Replicate', category: 'AI Platform' }
];

function TechCard({ tech, index }: { tech: typeof aiTechnologies[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: `linear-gradient(135deg, ${tech.color.includes('blue') ? '#3B82F6, #06B6D4' : tech.color.includes('purple') ? '#A855F7, #EC4899' : '#10B981, #14B8A6'})`}} />
      <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:border-transparent transition-all duration-500 h-full">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {tech.icon}
        </div>
        <h4 className="text-xl font-bold text-gray-800 mb-1">{tech.name}</h4>
        <p className="text-sm text-purple-600 font-medium mb-3">{tech.fullName}</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{tech.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.useCases.map((useCase) => (
            <span
              key={useCase}
              className="px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 rounded-full text-xs font-medium"
            >
              {useCase}
            </span>
          ))}
        </div>

        <div className="pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-400 font-medium mb-2">核心技术</p>
          <div className="flex flex-wrap gap-1">
            {tech.details?.map((detail) => (
              <span
                key={detail}
                className={`px-2 py-0.5 rounded text-xs font-medium ${
                  tech.color.includes('blue') ? 'bg-blue-50 text-blue-600' :
                  tech.color.includes('purple') ? 'bg-purple-50 text-purple-600' :
                  'bg-emerald-50 text-emerald-600'
                }`}
              >
                {detail}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          className="absolute top-4 right-4 w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity"
          animate={isHovered ? { scale: [1, 1.5, 1], opacity: [1, 0, 1] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}

export default function About() {
  const frontendSkills = skills.filter(s => s.category === 'frontend');
  const backendSkills = skills.filter(s => s.category === 'backend');
  const toolSkills = skills.filter(s => s.category === 'tools');

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                关于我
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                你好！我是一名热爱技术的在读大学生，专注于 AI 应用开发与全栈技术。
                我热衷于探索大语言模型的潜力，构建智能化的 Web 应用解决方案。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                我相信 AI 能够重塑用户体验，用智能赋能产品创新。
                在学习中，我注重代码质量与 AI 交互体验，追求技术与人文的平衡。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                业余时间，我专注于 AI 技术研究、Prompt 工程优化与 LLM 应用开发。
                如果你对 AI 应用有兴趣，欢迎交流合作！
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['React', 'Node.js', 'TypeScript', 'Python', 'AWS'].map((tag) => (
                  <motion.span
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-r from-red-50 to-orange-50 text-red-600 rounded-full text-sm font-medium border border-red-100"
                    whileHover={{ scale: 1.05, backgroundColor: '#FED7D7' }}
                    transition={{ duration: 0.2 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              {[
                { title: '前端开发', skills: frontendSkills, icon: '🎨' },
                { title: '后端开发', skills: backendSkills, icon: '⚙️' },
                { title: '工具&其他', skills: toolSkills, icon: '🛠️' }
              ].map((category) => (
                <div key={category.title} className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <span>{category.icon}</span>
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                          <span className="text-red-600">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mb-20">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4"
              >
                AI 技术栈
              </motion.span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  AI 技术探索
                </span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                深入研究前沿 AI 技术，掌握构建智能应用的核心能力
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {aiTechnologies.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-20">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">RAG 系统架构</h4>
              <p className="text-gray-600 text-sm">检索增强生成完整工作流程</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-3xl p-8 border border-purple-100 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: '📄', title: '数据源', desc: '文档、网页、数据库', color: 'bg-blue-500' },
                  { icon: '⚙️', title: '处理引擎', desc: 'LangChain/LlamaIndex', color: 'bg-purple-500' },
                  { icon: '🧮', title: '嵌入模型', desc: 'text-embedding-3-large', color: 'bg-pink-500' },
                  { icon: '💾', title: '向量存储', desc: 'ChromaDB / FAISS', color: 'bg-emerald-500' },
                  { icon: '🔍', title: '语义检索', desc: '余弦相似度 Top-K', color: 'bg-orange-500' },
                  { icon: '🤖', title: 'LLM 生成', desc: 'MiniMax / GLM', color: 'bg-red-500' }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm"
                  >
                    <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center text-white text-lg`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="relative bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600">数据流向</span>
                  <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">实时处理</span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  {['用户查询', '向量化', '相似度匹配', '上下文构建', 'LLM 生成', '返回答案'].map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      className="flex items-center"
                    >
                      <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium shadow-md">
                        {step}
                      </div>
                      {index < 5 && (
                        <svg className="w-6 h-6 text-purple-400 mx-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">技术工具栈</h4>
              <p className="text-gray-600 text-sm">常用 AI 开发工具与平台</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all cursor-default group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-purple-600 font-bold text-sm group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white transition-all">
                      {tech.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{tech.name}</p>
                      <p className="text-xs text-gray-400">{tech.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                ),
                title: 'LLM 微调',
                desc: '使用 LoRA/QLoRA 技术对大语言模型进行高效微调，实现特定领域优化，降低部署成本',
                color: 'from-indigo-500 to-blue-500'
              },
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                ),
                title: 'Prompt 工程',
                desc: '掌握 Chain-of-Thought、Few-Shot、Role-Prompting 等高级技巧，提升 AI 输出质量与准确性',
                color: 'from-amber-500 to-orange-500'
              },
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                  </svg>
                ),
                title: 'AI Agent',
                desc: '构建自主决策的 AI Agent，实现复杂任务自动化处理、多工具调用与长期记忆管理',
                color: 'from-emerald-500 to-teal-500'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                <div className="relative p-6 bg-white rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                    {item.icon}
                  </div>
                  <h5 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h5>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}