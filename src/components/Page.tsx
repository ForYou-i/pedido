import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface PageProps {
  children: React.ReactNode;
  className?: string;
}

const Page: React.FC<PageProps> = ({ children, className = '' }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className={`page-container ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default Page;