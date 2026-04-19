import { motion } from 'framer-motion';
import { useState } from 'react';
import DOMPurify from 'dompurify';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  }
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sanitizeInput = (input: string): string => {
    return DOMPurify.sanitize(input, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: []
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    sanitizeInput(formState.name);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (field: 'name' | 'email' | 'message', value: string) => {
    const sanitized = sanitizeInput(value);
    setFormState(prev => ({ ...prev, [field]: sanitized }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-red-50" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              联系我
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            有任何问题或合作意向？随时与我联系，我会尽快回复你
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">发送邮件</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                  role="alert"
                  aria-live="polite"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-900" role="status">消息已发送！</p>
                  <p className="text-gray-600 mt-2">我会尽快回复你</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" aria-label="联系表单">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="你的姓名"
                      required
                      maxLength={100}
                      aria-describedby="name-hint"
                    />
                    <span id="name-hint" className="sr-only">请输入您的姓名，最多100个字符</span>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="your@email.com"
                      required
                      maxLength={254}
                      aria-describedby="email-hint"
                    />
                    <span id="email-hint" className="sr-only">请输入有效的邮箱地址</span>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">留言</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                      placeholder="写下你想说的话..."
                      required
                      maxLength={2000}
                      aria-describedby="message-hint"
                    />
                    <span id="message-hint" className="sr-only">请输入您的留言，最多2000个字符</span>
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-xl shadow-lg shadow-red-500/30 hover:shadow-red-500/50 disabled:opacity-70 transition-all duration-300"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    aria-disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2" role="status" aria-live="polite">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        发送中...
                      </span>
                    ) : (
                      '发送消息'
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">其他联系方式</h3>
              <div className="space-y-4">
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors duration-300 group"
                  aria-label="发送邮件至 hello@example.com"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">邮箱</p>
                    <p className="font-medium text-gray-900">hello@example.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">社交媒体</h3>
              <div className="flex gap-4" role="list" aria-label="社交媒体链接">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-300"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`访问我的 ${social.name}`}
                    role="listitem"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-500 to-orange-500 p-8 rounded-2xl text-white" role="region" aria-label="合作邀请">
              <h3 className="text-2xl font-bold mb-4">期待合作</h3>
              <p className="text-red-100 leading-relaxed">
                无论是项目合作、技术咨询还是职业机会，我都非常乐意与你交流。
                期待收到你的消息！
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}