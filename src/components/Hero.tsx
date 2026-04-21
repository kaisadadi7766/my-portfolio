import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const codeSnippets = [
  { code: 'const developer = () => {}', x: '8%', y: '15%', delay: 0, duration: 20 },
  { code: 'import AI from "brain"', x: '82%', y: '12%', delay: 2, duration: 25 },
  { code: 'useState<any>()', x: '78%', y: '55%', delay: 4, duration: 22 },
  { code: 'function render() {', x: '3%', y: '60%', delay: 1, duration: 18 },
  { code: 'return <Hero />', x: '65%', y: '85%', delay: 3, duration: 24 },
  { code: 'async function fetch() {', x: '15%', y: '75%', delay: 5, duration: 28 },
  { code: 'export default App', x: '88%', y: '40%', delay: 1.5, duration: 23 },
  { code: 'const [data, setData]', x: '50%', y: '10%', delay: 3.5, duration: 21 },
  { code: '.map(item => <>)', x: '25%', y: '85%', delay: 2.5, duration: 26 },
  { code: 'if (user.isActive)', x: '70%', y: '70%', delay: 4.5, duration: 19 },
];

function FloatingCodeBlocks() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          className="absolute px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-red-200/30 rounded-lg text-xs font-mono text-red-600"
          style={{ left: snippet.x, top: snippet.y }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.15, 0.25, 0.15],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: snippet.duration,
            delay: snippet.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {snippet.code}
        </motion.div>
      ))}
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" ref={ref} aria-labelledby="hero-heading">
      <h1 id="hero-heading" className="sr-only">全栈开发者 - 个人作品集</h1>
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50" />
      <FloatingCodeBlocks />

      <motion.div
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-[100px]"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-[80px]"
        style={{ y: y2 }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-red-300/10 rounded-full blur-[60px] animate-[float_8s_ease-in-out_infinite]"
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.div
              className="mb-6 inline-flex items-center gap-2"
              variants={itemVariants}
            >
              <span className="relative inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 rounded-full text-sm font-semibold overflow-hidden">
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                <span className="relative z-10">👋 你好，欢迎来到我的世界</span>
              </span>
            </motion.div>

            <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" variants={itemVariants}>
              <motion.span
                className="text-gray-900 block"
                variants={itemVariants}
              >
                我是
              </motion.span>
              <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                全栈开发者
              </span>
              <span className="ml-1 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                AI+
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              专注于构建优雅、高性能的 Web 应用程序。
              <span className="text-red-600 font-medium">探索 AI 赋能的应用开发，用智能重塑用户体验。</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-full shadow-xl shadow-red-500/30 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  查看项目
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
              </motion.a>
              <motion.a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-full overflow-hidden"
                whileHover={{ borderColor: 'rgb(239, 68, 68)', color: 'rgb(220, 38, 38)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">联系我</span>
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-12 flex items-center gap-6 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <div className="flex -space-x-3">
                {['React', 'Vue', 'Node'].map((tech, i) => (
                  <motion.div
                    key={tech}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.1, type: 'spring' }}
                    whileHover={{ y: -5, scale: 1.1 }}
                  >
                    {tech[0]}
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-gray-500">技术栈图标</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-72 h-72 md:w-80 md:h-80"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-orange-500 scale-105 opacity-20" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-red-500 to-orange-500 scale-90 opacity-40" />
              <motion.div
                className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=pixel&backgroundColor=fef3c7"
                  alt="卡通头像"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute -top-2 -right-2 px-4 py-2 bg-white rounded-full shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-sm font-medium text-gray-700">📍 广东</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 px-4 py-2 bg-white rounded-full shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-sm font-medium text-gray-700">✨努力学习中</span>
              </motion.div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500"
                    animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <a href="#about" className="text-gray-400 hover:text-red-500 transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
}