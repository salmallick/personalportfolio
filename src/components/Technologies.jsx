import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiPython, SiCplusplus, SiSwift, SiMysql, SiNodedotjs } from 'react-icons/si';
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Tech Stack
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiPython className='text-7xl text-yellow-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiCplusplus className='text-7xl text-blue-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiSwift className='text-7xl text-orange-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiMysql className='text-7xl text-blue-600' />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiNodedotjs className='text-7xl text-green-500' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
