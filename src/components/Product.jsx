import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const Product = ({ val, mover, count, active }) => {
  const colors = [
    "#0f172a",
    "#1e293b",
    "#0ea5e9",
    "#9333ea",
    "#0f172a",
  ];

  const isActive = active === count;

  return (
    <motion.div
      onMouseEnter={() => mover(count)}
      animate={{
        backgroundColor: isActive ? colors[count] : "transparent",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-full h-[20rem] py-20 text-white border-b border-zinc-700"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">

        <h1 className="text-5xl font-semibold">
          {val.title}
        </h1>

        <div className="w-1/3">
          <p className="mb-10">{val.description}</p>

          <div className="flex items-center gap-5">
            {val.live && <Button />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Product;