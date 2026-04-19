import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const el = document.getElementById('loading-circle');
      if (el) {
        el.style.strokeDashoffset = '0';
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 2 }}
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          className="relative w-28 h-28 flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 opacity-20" />
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 opacity-40" />
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
            <span className="text-3xl font-bold text-white">P</span>
          </div>

          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 112 112">
            <circle
              id="loading-circle"
              cx="56"
              cy="56"
              r="52"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="327"
              strokeDashoffset="327"
              style={{
                transition: 'stroke-dashoffset 2s ease-out'
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Portfolio
          </h2>
        </motion.div>

        <motion.div
          className="mt-4 flex gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500"
              animate={{
                y: [0, -8, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}