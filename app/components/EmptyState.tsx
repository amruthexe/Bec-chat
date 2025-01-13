import { motion } from 'framer-motion';

const EmptyState = () => {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center items-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center items-center flex flex-col"
      >
       

        <h3 className="mt-6 text-2xl font-semibold text-gray-900">
          Select a chat or start a new conversation
        </h3>
        <p className="mt-2 text-gray-500">
          📬 Connect with your friends and colleagues effortlessly!
        </p>
      </motion.div>
    </div>
  );
};

export default EmptyState;
