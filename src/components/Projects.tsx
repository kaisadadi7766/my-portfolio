import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                我的项目
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              这里展示了我参与过的一些项目，每一个都是我用心打造的作品
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8" role="list" aria-label="项目列表">
            {projects.map((project) => (
              <motion.article
                key={project.id}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500"
                whileHover={{ y: -8 }}
                role="listitem"
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={`${project.name} 项目截图`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      aria-label={`在新窗口访问 ${project.name} 项目`}
                    >
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2" role="list" aria-label="技术栈">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                        role="listitem"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  aria-hidden="true"
                />
              </motion.article>
            ))}
          </div>

          <motion.div variants={cardVariants} className="text-center mt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-red-300 hover:text-red-600 transition-all duration-300"
              aria-label="在新窗口查看更多项目"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              查看更多项目
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}