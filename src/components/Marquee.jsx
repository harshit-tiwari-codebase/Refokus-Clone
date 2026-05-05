import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ imageURL }) => {
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex gap-16 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {/* duplicate content */}
        {[...imageURL, ...imageURL].map((url, idx) => (
          <img key={idx} src={url} className="h-12 w-auto object-contain" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
