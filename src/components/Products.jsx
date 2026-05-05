import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about AI, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week by creating a fully digital AR fashion experience.",
      live: true,
      case: true,
    },
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    }
  ];

  const [pos, setPos] = useState(null);
  const [active, setActive] = useState(null);

  const mover = (val) => {
    setPos(val * 20);
    setActive(val);
  };

  const reset = () => {
    setPos(null);
    setActive(null);
  };

  const videos = [
    "/videos/arqitel.webm",
    "/videos/ttr.webm",
    "/videos/yir.webm",
    "/videos/yahoo.webm",
    "/videos/arqitel.webm",
  ];

  return (
    <div className="mt-32 relative bg-zinc-900">

      {/* PRODUCTS */}
      <div onMouseLeave={reset}>
        {products.map((item, index) => (
          <Product
            key={index}
            val={item}
            mover={mover}
            count={index}
            active={active}
          />
        ))}
      </div>

      {/* VIDEO WINDOW */}
      <div className="absolute top-0 w-full h-full pointer-events-none z-50">
        <motion.div
          animate={{
            y: pos !== null ? `${pos}rem` : "-100%",
            x: "-50%",
            opacity: pos !== null ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute w-[30rem] h-[20rem] left-[44%] overflow-hidden rounded-xl shadow-lg"
        >
          <motion.div
            animate={{ y: pos !== null ? `-${pos}rem` : "0rem" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            {videos.map((vid, idx) => (
              <div key={idx} className="w-full h-[20rem]">
                <video
                  src={vid}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
};

export default Products;