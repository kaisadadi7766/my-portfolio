import { motion } from 'framer-motion';

const navItems = [
  { name: '首页', href: '#hero' },
  { name: '关于', href: '#about' },
  { name: '项目', href: '#projects' },
  { name: '联系', href: '#contact' },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100"
      role="banner"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4" aria-label="主导航">
        <div className="flex items-center justify-between">
          <motion.a
            href="#hero"
            className="text-2xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-red-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            aria-label="返回首页"
          >
            Portfolio
          </motion.a>

          <ul className="hidden md:flex items-center gap-8" role="list">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <a
                  href={item.href}
                  className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 py-2 group"
                  aria-current={item.name === '首页' ? 'page' : undefined}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300" aria-hidden="true" />
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-red-600 to-orange-500 text-white text-sm font-medium rounded-full shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            联系我
          </motion.a>

          <button
            className="md:hidden p-2"
            aria-label="打开菜单"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}