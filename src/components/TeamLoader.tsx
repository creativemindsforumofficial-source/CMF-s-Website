import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Lottie from 'lottie-react';

export default function TeamLoader({ onComplete }: { onComplete?: () => void }) {
  const [isLoading, setIsLoading] = useState(true);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Fetch animation data
    fetch('/team-loader.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));

    // 3-Second Kill Switch
    const timer = setTimeout(() => {
      setIsLoading(false);
      onComplete?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="team-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-white dark:bg-[#050505]"
        >
          {animationData && (
            <div className="w-64 h-64 md:w-96 md:h-96">
              <Lottie 
                animationData={animationData} 
                loop={true} 
                autoplay={true} 
              />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
