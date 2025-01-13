'use client';

import { motion } from 'framer-motion';

const EmptyState = () => {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center items-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center items-center flex flex-col"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className="p-6 bg-blue-100 rounded-full shadow-lg"
        >
          <svg
            className="w-16 h-16 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 6a9 9 0 110-18 9 9 0 010 18z"
            />
          </svg>
        </motion.div>
        <h3 className="mt-6 text-2xl font-semibold text-gray-900">
          Select a chat or start a new conversation
        </h3>
        <p className="mt-2 text-gray-500">
          Connect with your friends and colleagues effortlessly!
        </p>
      </motion.div>
    </div>
  );
};

export default EmptyState;
