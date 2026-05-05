import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 500); // exit delay
          return 100;
        }
        return prev + 1;
      });
    }, 27); // speed control

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[999] bg-[#0b0f14] flex flex-col justify-between"
    >
      {/* TOP PROGRESS BAR */}
      <div className="w-full h-[4px] bg-zinc-800">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* CENTER EMPTY SPACE */}
      <div className="flex-1 flex items-center justify-center" />

      {/* BOTTOM RIGHT % */}
      <div className="flex justify-end p-10">
        <h1 className="text-[10vw] font-bold tracking-tight">
          <span className="text-zinc-600">{progress}</span>
          <span className="text-purple-500">%</span>
        </h1>
      </div>
    </motion.div>
  );
};

export default Loader;