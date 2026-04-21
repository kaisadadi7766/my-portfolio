import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const codeSnippets = [
  { code: 'const developer = () => {}', x: '10%', y: '15%', delay: 0, duration: 20 },
  { code: 'import AI from "brain"', x: '80%', y: '12%', delay: 2, duration: 25 },
  { code: 'useState<any>()', x: '75%', y: '60%', delay: 4, duration: 22 },
  { code: 'function render() {', x: '5%', y: '65%', delay: 1, duration: 18 },
  { code: 'return <Hero />', x: '60%', y: '85%', delay: 3, duration: 24 },
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

interface LoadingProps {
  onStartExit: () => void;
  onComplete: () => void;
}

export default function Loading({ onStartExit, onComplete }: LoadingProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const progressRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentProgress = progressRef.current;
      if (currentProgress >= 100) {
        clearInterval(interval);
        return;
      }
      const progressRatio = currentProgress / 100;
      const baseIncrement = 10 - progressRatio * 7;
      const increment = Math.random() * 3 + Math.max(baseIncrement, 2);
      progressRef.current = Math.min(currentProgress + increment, 100);
      setProgress(progressRef.current);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100 && !isExiting) {
      const timer = setTimeout(() => {
        onStartExit();
        setIsExiting(true);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [progress, isExiting]);

  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        setIsDone(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isExiting]);

  useEffect(() => {
    if (isDone) {
      onComplete();
    }
  }, [isDone, onComplete]);

  if (isDone) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50" />
      <FloatingCodeBlocks />

      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-[80px]" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-red-300/10 rounded-full blur-[60px] animate-[float_8s_ease-in-out_infinite]" />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="relative w-28 h-28 flex items-center justify-center"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/20 via-orange-500/20 to-yellow-500/20 blur-xl" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 shadow-lg shadow-orange-500/30 backdrop-blur-md border border-white/30">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/40 via-transparent to-transparent" />
            <div className="absolute top-3 left-4 w-8 h-3 rounded-full bg-white/30 blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-white drop-shadow-lg">P</span>
            </div>
          </div>
          <div className="absolute -inset-4 rounded-full border border-orange-200/30 animate-pulse" />
          <div className="absolute -inset-8 rounded-full border border-red-100/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent tracking-wide">
            Portfolio
          </h2>
        </motion.div>

        <motion.div
          className="mt-6 w-48 h-1.5 bg-gray-200/80 rounded-full overflow-hidden backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.05 }}
          />
        </motion.div>

        <motion.div
          className="mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-sm font-medium text-orange-600/80">{Math.round(progress)}%</span>
        </motion.div>

        <motion.div
          className="mt-3 h-px w-16 bg-gradient-to-r from-transparent via-orange-300 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
}