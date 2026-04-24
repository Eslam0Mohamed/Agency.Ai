import React from "react";
import assets, { company_logos } from "../assets/assets";
import { easeOut, motion } from "motion/react";
const TrustedBy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeOut }}
      viewport={{ once: true }}
      className="px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white/80 flex flex-col items-center gap-10"
    >
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOut }}
        viewport={{ once: true }}
        className="font-semibold"
      >
        Trusted by Leading Companies
      </motion.h3>
      <motion.div
        initial=" hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1}}
        viewport={{ once: true }}
        className="m-5 flex gap-10 items-center flex-wrap justify-center"
      >
        {company_logos.map((logo, index) => {
          return (
            <motion.img
            variants={{
              hidden:{opacity:0,y:10},
              visible:{opacity:1,y:0}
            }}
            transition={{duration:0.4}}
              src={logo}
              key={index}
              alt={logo}
              className="max-h-5 sm:max-h-6"
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default TrustedBy;
